const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: process.env.ENV || 'dev',
  port: process.env.PORT || 8000,
  openstreetmap_base_url: process.env.OPENSTREETMAP_BASE_URL,
};
