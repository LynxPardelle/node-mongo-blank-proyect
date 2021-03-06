"use strict";

// Modules
var express = require("express");
var MainController = require("../controllers/main");

var router = express.Router();
var md_auth = require("../middlewares/authenticated");
var md_admin = require("../middlewares/is_admin");

var multer = require("multer");
var md_upload = multer({ dest: "./uploads" });
var md_upload = md_upload.any();

// Rutas de prueba
router.get("/datos-autor", MainController.datosAutor);

// Create
router.post("/create*blank/:id?", MainController.create);

// Get

// Update

// Delete

// Files

module.exports = router;
