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

    if (req.query.thisIsFalse) {
      req.query.thisIsFalse = utility.checkTrueFalseString(
        req.query.thisIsFalse
      );
      console.log(req.query.thisIsFalse);
      console.log(typeof req.query.thisIsFalse);
    }
    if (req.query.thisIsTrue) {
      req.query.thisIsTrue = utility.checkTrueFalseString(req.query.thisIsTrue);
      console.log(req.query.thisIsTrue);
      console.log(typeof req.query.thisIsTrue);
    }
    if (req.query.thisIsNull) {
      req.query.thisIsNull = utility.checkTrueFalseString(req.query.thisIsNull);
      console.log(req.query.thisIsNull);
      console.log(typeof req.query.thisIsNull);
    }
    if (req.query.thisIsUndefined) {
      req.query.thisIsUndefined = utility.checkTrueFalseString(
        req.query.thisIsUndefined
      );
      console.log(req.query.thisIsUndefined);
      console.log(typeof req.query.thisIsUndefined);
    }
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
