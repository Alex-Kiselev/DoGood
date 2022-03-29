const express = require("express");
const router = express.Router();
const { User, Item, Category } = require("../db/models");

router.get('/', async (req, res) => {
  res.json({message: 'Hello World!'})
})
module.exports = router;
