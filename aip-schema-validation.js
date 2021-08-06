
const fs = require('fs');
const Ajv = require("ajv");
const validationSchema = require('./aip-schema.json');

const ajv = new Ajv() 
const validate = ajv.compile(validationSchema)

jsonAips = JSON.parse(fs.readFileSync('./content/ipfs-aips/all-aips.json').toString());
Object.keys(jsonAips).forEach((id) => {
  const dataToValidate  = jsonAips[id];
  const valid = validate(dataToValidate)
  
  console.log(`AIP: ${id} schema is valid? ${valid}`);

  if (!valid) {
    throw new Error(JSON.stringify(validate.errors))
  }
});