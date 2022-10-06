const express = require("express");
const dotenv = require("dotenv");
const openapi = require("express-openapi");
const bodyParser = require("body-parser");
const contract = require("./../swagger");
const cors = require("cors");
const Sentry = require("@sentry/node");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Sentry.init({
  environment: process.env.ENV || "dev",
  dsn: process.env.SENTRY_URL,
  tracesSampleRate: 1.0,
});

openapi.initialize({
  apiDoc: contract,
  app,
  consumesMiddleware: {
    "application/json": bodyParser.json(),
  },
  dependencies: {},
  errorMiddleware: (err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  },
  docsPath: "/swagger",
  enableObjectCoercion: true,
  paths: "api/controllers",
  promiseMode: true,
  validateApiDoc: true,
});


app.use(function (err, req, res, next) {
  res.status(err.status).json(err);
});

module.exports = app;
