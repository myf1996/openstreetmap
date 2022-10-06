const util = require('./util')

class OpenStreetMapServices {
  constructor(){}

  async map(query){
    const response = await util.getResponseFromOpenStreetMapAPI(query)
    return util.convertOSMtoGeoJSON(response)
  }
}

module.exports = {
  OpenStreetMapServices,
}