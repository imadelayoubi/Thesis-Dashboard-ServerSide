var Bycycle = require("../Bycycle");
var mongoose = require("mongoose");

exports.createStation = (req, res) => {
  const Station = req.body;
  console.log("hiiiii", req.body);
  Bycycle.StationModel.create(Station)
    .then((data) => {
      res.status(201).send(data);
      console.log("data", data);
    })
    .catch((err) => {
      console.log(err);
    });
};
