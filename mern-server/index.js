const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors');

//middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//mongodc configuration



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:5gILclIEh4VKlD9g@cluster0.5fzwix7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //create a collection of documents
        const booksCollections = client.db("BookInventory").collection("books");

        //insert a new book to db:post method
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await booksCollections.insertOne(data);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})