const {Router} = require("express");
const router = Router();  

const way = require("../data/data")
router.get("/", (req, res) =>{ 
   res.set("Access-Control-Allow-Origin", "*")

    const results = way.data.data
    res.json(results) 
})

module.exports = router; 