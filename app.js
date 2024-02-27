const bodyParser = require("body-parser");
const express = require("express");
const {userRouter} = require("./Routes/user.routes");
const { connection } = require("./db.js");
const { resRouter } = require("./Routes/res.routes.js");






const app=express()
app.use(express.json())

app.use(bodyParser.urlencoded({extended:false}))
app.use("/users", userRouter)
app.use("/users", resRouter )


const PORT = 4500
app.listen(PORT, async()=>{
   try {
      await connection
    console.log("server connected")
    console.log(`Port is running at ${PORT}`)
   } catch (error) {
    console.log(error)
    console.log("something went wrong")
   }
})