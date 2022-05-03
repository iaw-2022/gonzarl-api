const config = require ('./config');
const path = require('path');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'F1 Fantasy 2022 API',
            description: 'API Docs',
            servers: [config.SERVER]
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.routes.js")}`],
}

module.exports = swaggerOptions