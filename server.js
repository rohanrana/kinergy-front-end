// require("@babel/register")({
//     presets: ["@babel/preset-env"]
//   });
  
const express = require('express');
const bodyParser  = require( 'body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const dbconnection = require('./db_handler/mongodb');
const staff = require('./models/staffModel');
const config = require('./config/env/config');
const staffRoutes = require('./routes/staffRoute');

const environment =config();

app.listen(environment.port,()=>{
    console.log(`Server is running on ${environment.port}`)
})

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(cors());  
app.use('/api/v1/staff',staffRoutes);


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    console.log('Server Running')
//res.sendFile(__dirname + '/dist/index.html')
});


