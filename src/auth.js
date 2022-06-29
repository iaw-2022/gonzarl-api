const config = require("./config");
var { expressjwt: jwt } = require("express-jwt");
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: config.AUTH_JWK_URI,
  }),
  audience: config.AUTH_AUDIENCE,
  issuer: config.AUTH_ISSUER,
  algorithms: [config.AUTH_ALGORITHM]
});

module.exports = jwtCheck