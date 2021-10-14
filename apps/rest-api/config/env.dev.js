const dotenv = require("dotenv");

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const port = process.env.PORT || 8080

module.exports = {
  audience,
  domain,
  port
};
