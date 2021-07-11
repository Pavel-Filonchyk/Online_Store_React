exports.getFile = function (req, res) {
    res.set("Access-Control-Allow-Origin", "*")
    res.download("../../start/server/data/img/" +req.params.path) 
}
