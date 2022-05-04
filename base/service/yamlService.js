const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const yaml2json = (filePath) => {
  try {
    let dir = fs.readFileSync(filePath, 'utf8');
    const doc = yaml.load(dir);
    return doc;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  yaml2json
}