
const fs = require('fs');
const Ajv = require("ajv");
const validationSchema = require('./aip-schema.json');

const ajv = new Ajv() 
const validate = ajv.compile(validationSchema)

jsonAips = JSON.parse(fs.readFileSync('./content/ipfs-aips/all-aips.json').toString());
Object.keys(jsonAips).forEach((id) => {
  const idNumber = id.split('-')[1];
  if (Number(idNumber) > 30) {
    delete Object.assign(jsonAips[id], {'description': jsonAips[id]['content'] })['content'];
    const valid = validate(jsonAips[id])
    
    console.log(`AIP: ${id} schema is valid? ${valid}`);

    if (!valid) {
      console.log('Proposal: ', jsonAips[id]);
      throw new Error(JSON.stringify(validate.errors))
    }
  }
});