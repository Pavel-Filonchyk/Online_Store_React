const express = require("express")  
const app = express()


app.listen(3001, function(){    
    console.log("express server is running on port 3001")
})
app.use("/list/", require("./routes/routes"))

const img = require("./routes/routeIMG")
app.get("/image/:path", img.getFile)













/*
app.get("/image/:path", function(req, res){
    res.send(express.static("../../start/server/data/img/") +req.params.path)
})

//app.use("/", express.static())
//app.use("/static", express.static("./data/img"))
//app.use(express.static("./data/img"))
//app.use("/static", express.static(path.join(__dirname, "./data/img")))
*/
