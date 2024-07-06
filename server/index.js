//import packages
import express from 'express'
import ViteExpress from 'vite-express'

//set up express instance
const app = express()

//set up middleware
app.use(express.json()) //make sure the app knows to use JSON
app.use(express.static('/')) //

//map
const mapArray = [
    "Launchpad", "Ascent", "Low-Earth-Orbit","Lunar Orbit", "Lunar Surface"
]

//data
let TEST_DATA = [
        {
        id : 0,
        craftName: "Shuttle 3",
        deltaV: 4,
        currLocation : mapArray[0],
        },
    
        {
        id: 1,
        craftName: "Andromeda 12",
        deltaV: 3,
        currLocation : mapArray[1],
        }
        //added a comment
    
    
]



let globalID = 2


//Routes/endpoints
//CRUD (create, read, update, delete) or get, post, put, delete
app.get('/api/allVehicles', (request, response) => {
    response.status(202).send(TEST_DATA)
})

//add a vehicle to the list
app.post('/api/Vehicle', (req, res) => {

    const vehicleObject = req.body //use body obj to send data for larger or sensative data

    vehicleObject.id = globalID
    vehicleObject.currLocation = mapArray[0]

    TEST_DATA.push(vehicleObject)

    globalID++

    res.status(201).send(TEST_DATA)
})

//deacivate or delete a vehicle from the list
app.delete('/api/vehicle/:id', (req, res) => {
    const id2kill = req.params.id //use params to send data for shorter or non-sensative data
    TEST_DATA = TEST_DATA.filter((el) => el.id != id2kill)
    res.status(200).send(TEST_DATA)
})


//navigate the vehcile to a new destination
app.put('/api/vehicle/:id/:direction', (req, res) => {
    const id2change = req.params.id
    const direction = req.params.direction //should be either "out" or "back"

    //find object we'll need to edit
    const editVehicle = TEST_DATA.find((el)=> el.id == id2change)

    //find out where the vehicle currently is
    let locationIndex = mapArray.indexOf(editVehicle.currLocation)
    console.log (editVehicle.craftName + " currently at: " + editVehicle.currLocation)

    //if the vehicle is moving out, add one to the location index
    if(direction === "out" && editVehicle.deltaV > 0 && editVehicle.currLocation != "Lunar Surface"){
        locationIndex++
        editVehicle.deltaV--
    }
    //if it's moving back, subtract one from the location index
    else if(direction === "back" && editVehicle.deltaV > 0 && editVehicle.currLocation != "Launchpad"){
        locationIndex--
        editVehicle.deltaV--
    }
    //assign the vehicle it's new location
    editVehicle.currLocation = mapArray[locationIndex]
    console.log (editVehicle.craftName + " moved to: " + editVehicle.currLocation)


    //send back the updated TEST_DATA array
    res.status(200).send(TEST_DATA)
})



//open the door to the server
ViteExpress.listen(app, 2969, () => console.log('launching rockets at: http://localhost:2969'))