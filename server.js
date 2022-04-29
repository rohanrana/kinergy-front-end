// require("@babel/register")({
//     presets: ["@babel/preset-env"]
//   });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const dbconnection = require('./db_handler/mongodb');
const staff = require('./models/staffModel');
const config = require('./config/env/config');

const countryStateCityRoutes = require('./routes/countryStateCityRoutes');
const roleRoutes = require('./routes/roleRoute');
const serviceRoutes = require('./routes/serviceRoute');
const staffRoutes = require('./routes/staffRoute');
const employeeRoutes = require('./routes/employeeRoutes');
const facilityRoutes = require('./routes/facilityRoute');
const taxRoutes = require('./routes/taxRoute');
const appointmentRoutes = require('./routes/appointmentRoute');


app.set("views", path.join(__dirname, ""))
app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("signup");
})


const environment = config();

app.listen(environment.port, () => {
    console.log(`Server is running on ${environment.port}`)
})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: '50mb'
}));



app.use(cors());
app.use('/api/v1/Country', countryStateCityRoutes);
app.use('/api/v1/role', roleRoutes);
app.use('/api/v1/service', serviceRoutes);
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/facility', facilityRoutes);
app.use('/api/v1/tax', taxRoutes);

app.use('/api/v1/appointments', appointmentRoutes);






app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    console.log('Server Running')
        //res.sendFile(__dirname + '/dist/index.html')
});