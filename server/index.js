//import packages
import express from 'express'
import ViteExpress from 'vite-express'

//set up express instance
const app = express()

//set up middleware
app.use(express.json()) //make sure the app knows to use JSON
app.use(express.static('/')) //

//data
let TEST_DATA = [
    
];

let globalID = 0


//Routes/endpoints
//CRUD (create, read, update, delete) or get, post, put, delete




//open the door to the server
ViteExpress.listen(app, 1969, () => console.log('launching rockets at: http://localhost:1969'))