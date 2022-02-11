"use strict";

// modulos
var validator = require("validator");
var bcrypt = require("bcrypt");
var fs = require("fs");
var path = require("path");

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
};

module.exports = controller;
