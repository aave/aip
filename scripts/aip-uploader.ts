#!/usr/bin/env node
// \@ts-nocheck
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import bs58 from "bs58"
import { execSync } from "child_process"
import { exit } from "process"
import rawJsonAips from "../content/ipfs-aips/all-aips.json"
import fs from "fs"
import fetch from "node-fetch"
// @ts-ignore
import Hash from "ipfs-only-hash"

dotenv.config()

const { PINATA_KEY, PINATA_SECRET } = process.env as {
  PINATA_KEY: string
  PINATA_SECRET: string
}

const pinataEndpoint = "https://api.pinata.cloud/pinning/pinJSONToIPFS"

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// https://ethereum.stackexchange.com/questions/44506/ipfs-hash-algorithm
async function getHash(data: string) {
  return Hash.of(data)
}

async function main() {
  for (const [name, aip] of Object.entries(rawJsonAips)) {
    // @ts-ignore
    aip.description = aip.content
    // @ts-ignore
    delete aip.content

    const filename = `./content/ipfs-aips/${aip.basename}-Ipfs-hashes.json`

    const fileExists = fs.existsSync(filename)
    if (fileExists) {
      const hash = await getHash(JSON.stringify(aip))
      const data = JSON.parse(fs.readFileSync(filename, "utf8"))
      if (data.hash === hash) {
        console.log(
          `skipping as uploaded with same hash already: ${aip.basename}`
        )
        continue
      }
    }

    try {
      const res = await fetch(pinataEndpoint, {
        method: "POST",
        body: JSON.stringify({
          pinataOptions: { cidVersion: 0 },
          pinataContent: aip,
        }),
        headers: {
          "Content-Type": "application/json",
          pinata_api_key: PINATA_KEY,
          pinata_secret_api_key: PINATA_SECRET,
        },
      })

      if (!res.ok) {
        throw Error(await res.text())
      }

      const result = await res.json()

      if (result.error) throw { message: result.error }

      const hash = result.IpfsHash
      const encodedHash = `0x${Buffer.from(bs58.decode(hash))
        .slice(2)
        .toString("hex")}`
      console.log(`${aip.title}: ✅ Success!`)
      console.log(` IPFS hash: ${hash}`)
      console.log(` Encoded IPFS hash (for proposal creation): ${encodedHash}`)
      console.log(
        ` See the file here: https://gateway.pinata.cloud/ipfs/${hash}`
      )
      fs.writeFileSync(
        filename,
        JSON.stringify({ name: aip.basename, hash, encodedHash }, null, 2)
      )
      await delay(250)
      execSync(
        `curl -s https://gateway.pinata.cloud/ipfs/${hash} > tmp && curl -sF file='@./tmp' https://api.thegraph.com/ipfs/api/v0/add`
      )
      await delay(250)
    } catch (error) {
      console.error(`Error during main loop: ${error}`)
      throw error
    }
  }
}

;(async () => {
  try {
    await main()
  } catch (e) {
    console.error(`Exiting [aip-uploader] process due next error: \n ${e}`)
    exit(1)
  }
})()
