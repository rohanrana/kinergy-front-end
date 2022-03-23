// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = "mongodb+srv://techuser:Stillbon001@cluster0.iht4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// export default client.connect(err => {
//   const collection = client.db("test").collection("users");
//   console.log(collection)
//   // perform actions on the collection object
//  // client.close();
// });

import  mongoose from 'mongoose';
const log = console.log;
global.Promise = mongoose.Promise;
const DB_URL = "mongodb+srv://techuser:Stillbon001@cluster0.iht4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var againConnect = ()=>{
    setInterval(()=>{
        db_connect();
    },1000)
}

export default function db_connect(){
    mongoose.connection.openUri(DB_URL);
};
db_connect();

mongoose.connection.on('connected', () =>{ 
    clearInterval(againConnect);
    log(`DB connected`);
});

mongoose.connection.on('error', (error) => {
    log(`Error in DB connetcion is ${error}`);
});

mongoose.connection.on('disconnected', () => {
    againConnect();
})