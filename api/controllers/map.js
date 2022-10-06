const { OpenStreetMapServices } = require('./../services/openstreetmap.services');
const Sentry = require('@sentry/node');

module.exports = () => ({
  get: async (req, res) => {
    try {
      const query = {
        ...(req.query.minLon ? {minLon: req.query.minLon }: {}),
        ...(req.query.minLat ? {minLat: req.query.minLat }: {}),
        ...(req.query.maxLon ? {maxLon: req.query.maxLon }: {}),
        ...(req.query.maxLat ? {maxLat: req.query.maxLat }: {}),
      };
      const openStreetMapServices = new OpenStreetMapServices();
      const response = await openStreetMapServices.map(query)
      res.send(response)
    } catch (error) {
      console.log(error)
      Sentry.captureException(error);
      res.status(error.code || 500).send(error.message)
    }
  }
});
