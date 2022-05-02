const express = require('express');
const cors = require('cors');
const teamsRoutes = require('./routes/teams.routes');
const driversInTeamsRoutes = require('./routes/drivers_in_teams.routes');

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

app.use('/teams', teamsRoutes);
app.use('/drivers_in_teams', driversInTeamsRoutes);

module.exports = app;