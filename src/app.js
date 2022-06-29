const express = require('express');
const cors = require('cors');
const teamsRoutes = require('./routes/teams.routes');
const driversRoutes = require('./routes/drivers.routes');
const driversInTeamsRoutes = require('./routes/drivers_in_teams.routes');
const racesRoutes = require('./routes/races.routes');
const finishesRoutes = require('./routes/finishes.routes');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//app
const app = express();

//middlewares
app.use(cors());
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

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({error: "Invalid token"});
    }
});

module.exports = app;