const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json());

// user: fixing
// paswd: f0DsqYpRFH3HxXnY


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fixing:f0DsqYpRFH3HxXnY@cluster0.hc4xz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log('connected mongodb')
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


async function run() {
    try {
      await client.connect();
      const servicesCollection = client.db("fixing-helper").collection("services");
  
      app.get("/services", async (req, res) => {
        const services = await servicesCollection.find({}).toArray();
        console.log(services);
        res.send(services);
      });
    } finally {
    }
  }
  run().catch(console.dir);



app.get('/', async(req, res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})