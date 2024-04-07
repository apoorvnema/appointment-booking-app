const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/user');
const sequelize = require('./utils/database');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoute);

sequelize
    .sync()
    .then(() => { app.listen(3000, () => console.log('Server running on port 3000')); })
    .catch(err => console.log(err));

