import express from 'express';
import bodyParser  from  'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
const app = express();
import dbconnection from './db_handler/mongodb.js';
import user from './models/usersModel.js';

app.listen(8080,()=>{
    console.log(`Server is running on 8080`)
})

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(cors());  
const __dirname = path.resolve();


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    console.log('Server Running')
//res.sendFile(__dirname + '/dist/index.html')
});


