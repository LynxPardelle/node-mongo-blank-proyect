"use strict";

var mongoose = require("mongoose");
var express = require("express");
var app = require("./app");
var port = 4224;

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://159.203.122.158:27017/testingNodeMongoBlank", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "la conexión a la base de datos de testingNodeMongoBlank se ha realizado correctamente."
    );

    // Crear servidor y escuchar peticiones http
    var server = app.listen(port, () => {
      console.log("Servidor corriendo en https://localhost:4224");
    });

    app.use(express.static("client"));
  })
  .catch((err) => console.log(err));
