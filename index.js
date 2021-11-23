// Express js
const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors')

const app = express()
const port = process.env.DB_HOST || 7000

// Middleware
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ywuva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        console.log('connected')

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})











// Node.js
/* const os = require('os');
const fs = require('fs');

console.log("os Version", os.version());
console.log('os', os.arch());

// fs.writeFileSync('hello.txt', 'I am writing from Node')
// fs.appendFileSync('hello.txt', '\nMore text More text')

const content = fs.readFileSync('hello.txt');
console.log(content.toString())

console.log("Running Node") */




/*

One time:
1. nodemon globally install
2. mongodb atlas user, access


Connect

Every Project
0. npm init -y
1. install mongodb, express, cors, dotenv
2. import (require), mongodb
3. copy uri (connection string)
4. create the client (copy code from atlas)
5. create or get database access credentials (username and password)
6. create .env file and DB_USER and DB_PASS as environment variable
7. require('dotenv').config()   import  in index.js
8. Convert URI string to a template string.
9.  Add DB_USER and DB_PASS in the connection URI string
10. Check URI string by using console.log
11. Create async function run and call it by using run().catch(console.dir)
12. Add try and finally inside the run function.
13. Comment out await client.close() to keep the connection alive
14. Add await client.connect(); inside the try block
15. use a console.log after the client.connect to ensure database is connected
*/