
  module.exports = () => ({
    get: async (req, res) => {
        res.json({ message: "Application is healthy." });
    }
  });
  