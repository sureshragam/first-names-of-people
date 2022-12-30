let peoples = require("../country/state/city/index");
let getFirstNames = require("../utilities/utils/index");

function getPeopleInCity(peoples) {
  let outputList = getFirstNames(peoples);
  return outputList;
}

module.exports = getPeopleInCity;
