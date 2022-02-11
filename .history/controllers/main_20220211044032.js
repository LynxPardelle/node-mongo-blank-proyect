"use strict";

// modulos
var validator = require("validator");
var bcrypt = require("bcrypt");
var fs = require("fs");
var path = require("path");

// modelos
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ModelSchema = Schema({ schema: String });
var Model = mongoose.model("Model", ModelSchema);

// Main jwt
var jwt = require("../services/jwt");

// Key
var secret = require("../keys/secret");

// utility
var utility = require("../services/utility");

var controller = {
  datosAutor: (req, res) => {
    return res.status(200).send({
      autor: "Lynx Pardelle",
      url: "https://www.lynxpardelle.com",
    });
  },

  // Create
  async create(req, res) {
    // Recoger parametros por post
    var body = req.body;

    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    // console.log(req.rawHeaders);

    var options = {};
    if (req.rawHeaders.includes("options")) {
      let i = req.rawHeaders.indexOf("options");
      if (1 >= 0) {
        if (utility.IsJsonString(req.rawHeaders[i + 1])) {
          options = JSON.parse(req.rawHeaders[i + 1]);
        }
      }
    }

    console.log(options);

    return res.status(200).send({
      autor: "Lynx Pardelle",
      url: "https://www.lynxpardelle.com",
    });
  },
};

module.exports = controller;
