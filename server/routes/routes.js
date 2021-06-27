const {Router} = require("express");
const router = Router();  

const way = require("../data/data")
router.get("/", (req, res) =>{ 
   res.set("Access-Control-Allow-Origin", "*")

    const results = way.data.data
    res.json(results) 
})
/*
const way1 = require("../data/img")
router.get("/", (req, res) =>{ 
    res.set("Access-Control-Allow-Origin", "*")
 
    //const urlRequest = req.query.url
    //const result = way1.slice(urlRequest)
    res.json(way1) 
 })
*/
module.exports = router; 