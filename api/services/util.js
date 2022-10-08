const axios = require('axios');
const osmtogeojson = require('osmtogeojson');
const config = require('./../config');

// ***************************************
//         33.0890
// 73.0280         74.0706
//         33.0585
// Left Bottom Right Top
// https://overpass-api.de/api/map?bbox=73.0280,33.0585,74.0706,33.0890
// http://localhost:8000/openstreetmap/map?minLon=73.0288&minLat=33.0585&maxLon=74.0706&maxLat=33.0890
// ***************************************
const getResponseFromOpenStreetMapAPI = async (query) => {
  try {
    const options = {
      method: 'GET',
      url: `${config.openstreetmap_base_url}/api/0.6/map`,
      params: {bbox: `${query.minLon},${query.minLat},${query.maxLon},${query.maxLat}`}
    };
    const response = await axios.request(options)
    // console.log(response.data)
    return response.data
  } catch (error) {
    let err = new Error(JSON.stringify({message: error.response.data}))
    err.code = error.response.status
    throw err
  }
}

const convertOSMtoGeoJSON = (data) => {
  return osmtogeojson(data);
}

module.exports = {
  getResponseFromOpenStreetMapAPI,
  convertOSMtoGeoJSON,
}