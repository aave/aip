const ethers = require("ethers");

(() => {
  const [title, date] = process.argv.slice(2)
  if (
    !title ||
    title === "" ||
    !date ||
    date === "" ||
    date.split("-").length !== 3
  ) {
    console.error(
      "Wrong input parameters.\nUse of the command: npm run generate-title '[title]' '[yyyy-mm-dd]'"
    )
    process.exit(-1)
  }
  const hash = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(`${title}${date}`)
  )
  console.log(hash.replace("0x", "").slice(0, 12))
})()
