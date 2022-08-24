import rawJsonAips from "../content/ipfs-aips/all-aips.json"
const Ajv = require("ajv")
const validationSchema = require("../aip-schema.json")

const ajv = new Ajv()
const validate = ajv.compile(validationSchema)

const jsonAips = Object.values(rawJsonAips)
for (const jsonAip of jsonAips) {
  Object.assign(jsonAip, { description: jsonAip["content"] })
  delete (jsonAip as Partial<typeof jsonAip>).content
  const valid = validate(jsonAip)

  console.log(`AIP: "${jsonAip.title}" schema is valid? ${valid}`)

  if (!valid) {
    console.log("Proposal: ", jsonAip)
    throw new Error(JSON.stringify(validate.errors))
  }
}
