import fs from "node:fs"
import path from "node:path"

async function generateReadme() {
  const aipsFolder = "./content/ipfs-aips"
  let reportsTable = "<!-- ### AIPs table start ### -->\n"
  const aips = fs.readdirSync(aipsFolder)
  reportsTable += `### AIPs\n\n`
  reportsTable += `| AIP | hash | encoded hash | preview |\n| --- | --- | --- | --- |\n`
  for (const aip of aips) {
    if (aip !== "all-aips.json") {
      const aipContent = require(path.join(__dirname, "../", aipsFolder, aip))
      reportsTable += `| [${aipContent.name}](${aipsFolder}/${aip}) | ${aipContent.hash} | ${aipContent.encodedHash} | [preview](https://app.aave.com/governance/ipfs-preview/?ipfsHash=${aipContent.encodedHash}) | \n`
    }
  }
  reportsTable += `\n`
  reportsTable += "<!-- ### AIPs table end ### -->"
  await fs.readFile("./README.md", "utf8", function (err, data) {
    if (err) {
      return console.log(err)
    }
    var result = data.replace(
      /<!-- ### AIPs table start ### -->[\s\S]*<!-- ### AIPs table end ### -->/gm,
      reportsTable
    )

    fs.writeFile("./README.md", result, "utf8", function (err) {
      if (err) return console.log(err)
    })
  })
}

generateReadme()
