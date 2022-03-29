const express = require("express");
const router = express.Router();
const { User, Item, Category, Taken } = require("../db/models");
const { convertCategoryId } = require("../src/controller.js");
const { upload } = require("../middlewares/allMiddleware");
const helper = require("../src/helper");

router.get("/", async (req, res) => {
  const Items = await Item.findAll({
    include: [Category, User],
    order: [["id", "DESC"]],
  });
  res.json(Items);
});

router.get("/takens", async (req, res) => {
  const Takens = await Taken.findAll();
  res.json(Takens);
});

router.get("/categories", async (req, res) => {
  const Categories = await Category.findAll();
  res.json(Categories);
});

router.post("/addgood", upload.single("file"), async (req, res) => {
  const img = req.file ? `/img/${req.file.originalname}` : null;

  const {
    title,
    description,
    category,
    geolocation,
    city,
    user_id,
    validUntil,
  } = req.body;

  const category_id = convertCategoryId(category);

  const x = await helper({ geolocation, city });

  const objForDB = {
    title,
    img,
    category_id,
    user_id,
    description,
    available: true,
    city: geolocation,
    address: city,
    coordinatesX: x.coordinate[0],
    coordinatesY: x.coordinate[1],
    validUntil,
  };

  const ourPost = await Item.create(objForDB);
  console.log(ourPost);
  res.json(ourPost);
});

router.post("/:id", async (req, res) => {
  try {
    console.log("req--params---", req.params);
    const data = await Item.update(
      { available: false },
      { where: { id: req.params.id } }
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { geolocation, city } = req.body;
    const x = await helper({ geolocation: city, city: geolocation });

    const data = await Item.update(
      {
        title: req.body.title,
        description: req.body.description,
        city: req.body.city,
        address: req.body.geolocation,
        coordinatesX: x.coordinate[0],
        coordinatesY: x.coordinate[1],
      },
      { where: { id: req.params.id } }
    );
    res.json({x});
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
