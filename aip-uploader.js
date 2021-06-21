#!/usr/bin/env node
const bs58 = require('bs58');
const fs = require('fs')
const fetch = require('node-fetch')
const { exec, spawn } = require('child_process');

const { PINATA_KEY, PINATA_SECRET} = process.env;

const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'


jsonAips = JSON.parse(fs.readFileSync('./content/ipfs-aips/all-aips.json').toString());
Object.keys(jsonAips).forEach((id) => {
  delete Object.assign(jsonAips[id], {'description': jsonAips[id]['content'] })['content'];
  fetch(pinataEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      pinataOptions: { cidVersion: 0 },
      pinataContent: jsonAips[id],
    }),
    headers: {
      'Content-Type': 'application/json',
      pinata_api_key: PINATA_KEY,
      pinata_secret_api_key: PINATA_SECRET,
    },
  })
  .then(res => {
    return res.json()
  }).then(result => {
    if (result.error) throw { message: result.error }
    const hash = result.IpfsHash
    const encodedHash = `0x${
      bs58
      .decode(hash)
      .slice(2)
      .toString('hex')
    }`
    jsonAips[id].ipfsHash = hash
    jsonAips[id].encodeIpfsHash = encodedHash
    console.log('✅ Success!')
    console.log(` IPFS hash: ${hash}`)
    console.log(` Encoded IPFS hash (for proposal creation): ${encodedHash}`)
    console.log(` See the file here: https://gateway.pinata.cloud/ipfs/${hash}`)
    fs.writeFileSync(
      `./content/ipfs-aips/${id}-Ipfs-hashes.json`,
      JSON.stringify({aip: id, hash, encodedHash}, null, 2)
    )
    fs.writeFileSync(
      `./content/ipfs-aips/all-aips.json`,
      JSON.stringify(jsonAips, null, 2)
    )
    exec(`curl https://gateway.pinata.cloud/ipfs/${hash} > tmp && curl -sF file='@./tmp' https://api.thegraph.com/ipfs/api/v0/add`, (err, stdout, stderr) => {
      if(err) {
        throw new Error(stderr)
      }
      console.log(stdout)
    });
  }).catch((err) => {
    console.log('error:', err);
  })
})


  
