// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = "mongodb+srv://techuser:Stillbon001@cluster0.iht4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// export default client.connect(err => {
//   const collection = client.db("test").collection("users");
//   console.log(collection)
//   // perform actions on the collection object
//  // client.close();
// });

const mongoose = require('mongoose');
const log = console.log;
global.Promise = mongoose.Promise;
const config = require('../config/env/config.js');
const environment = config();
const DB_URL = environment.db
    //"mongodb+srv://techuser:Stillbon001@cluster0.iht4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var againConnect = () => {
    setInterval(() => {
        db_connect();
    }, 1000)
}

function db_connect() {
    mongoose.connection.openUri(DB_URL);
};
db_connect();

mongoose.connection.on('connected', () => {
    clearInterval(againConnect);
    log(`DB connected`);
});

mongoose.connection.on('error', (error) => {
    console.log(error);
    log(`Error in DB connetcion is ${error}`);
});

mongoose.connection.on('disconnected', () => {
    againConnect();
})