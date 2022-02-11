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

    return res.status(200).send({
      autor: "Lynx Pardelle",
      url: "https://www.lynxpardelle.com",
      body: body,
      req: req,
    });
  },
};

module.exports = controller;
