const fs = require('fs');
const Ajv = require("ajv");
const validationSchema = require('./aip-schema.json');

const ajv = new Ajv() 
const validate = ajv.compile(validationSchema)

rawJsonAips = JSON.parse(
  fs.readFileSync("./content/ipfs-aips/all-aips.json").toString()
)
jsonAips = Object.values(rawJsonAips)
for (const jsonAip of jsonAips) {
  delete Object.assign(jsonAip, { description: jsonAip["content"] })["content"]
  const valid = validate(jsonAip)

  console.log(`AIP: "${jsonAip.title}" schema is valid? ${valid}`)

  if (!valid) {
    console.log("Proposal: ", jsonAip)
    throw new Error(JSON.stringify(validate.errors))
  }
}
