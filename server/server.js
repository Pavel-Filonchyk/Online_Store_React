const express = require("express")  
const app = express()

app.use("/list/", require("./routes/routes"))
app.listen(3001, function(){    
    console.log("express server is running on port 3001")
})