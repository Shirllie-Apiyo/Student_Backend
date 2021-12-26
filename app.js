// npm install express --save
//npm install body-parser --save
//npm install cookie-parser --save
//npm install multer --save
//npm install mongoose

let express = require("express")
let mongoose = require("mongoose")
let routes = require("./routes")


//if you use the UseNewUrlParser you specify the port else you dont specify the port
mongoose
    .connect("mongodb://localhost:27017/studentdb", {useNewUrlParser: true})

    .then(()=>{
        let app = express()
        //allow express to understand json post
        app.use(express.json())
        app.use("/api", routes) // check routes.js where routes are defined
        app.listen(8080,()=>{
            console.log("Server running at http://127.0.0.1:5000")
        })

    })//end then