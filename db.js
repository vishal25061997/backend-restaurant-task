const mongoose = require("mongoose");


const connection = mongoose.connect("mongodb://127.0.0.1:27017/resturants"
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // bufferCommands: false
  )



module.exports= {connection}


// mongodb://localhost:27017/resturants

// mongodb://127.0.0.1:27017/republic