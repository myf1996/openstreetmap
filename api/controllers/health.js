module.exports = () => ({
  get: async (req, res) => {
    res.json({ message: "OpenStreetMap Application is healthy." });
  }
});
