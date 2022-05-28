const express = require('express');
const teamsRoutes = require('./routes/teams.routes');
const driversRoutes = require('./routes/drivers.routes');
const driversInTeamsRoutes = require('./routes/drivers_in_teams.routes');
const racesRoutes = require('./routes/races.routes');
const finishesRoutes = require('./routes/finishes.routes');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
const { auth } = require('express-openid-connect');
const config = require('./config');

//app
const app = express();

//middlewares
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/teams', teamsRoutes);
app.use('/drivers', driversRoutes);
app.use('/drivers_in_teams', driversInTeamsRoutes);
app.use('/races', racesRoutes);
app.use('/finishes',finishesRoutes);

module.exports = app;