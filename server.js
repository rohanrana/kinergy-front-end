import express from 'express';
import bodyParser  from  'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
const app = express();
import dbconnection from './db_handler/mongodb.js';
import user from './models/userModel.js';
import config from './config/env/config.js';
import userRoutes from './routes/userRoute.js'
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
app.use('/api/v1/user',userRoutes);
const __dirname = path.resolve();


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    console.log('Server Running')
//res.sendFile(__dirname + '/dist/index.html')
});


