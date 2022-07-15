const express = require("express");
const router = express.Router();

let dogs = [
  {
    id: 1,
    name: "Fido",
    age: 3,
    breed: "Poodle",
    image: "https://images.dog.ceo/breeds/poodle/n02099601_1005.jpg",
  },
  {
    id: 2,
    name: "Buddy",
    age: 1,
    breed: "Poodle",
    image: "https://images.dog.ceo/breeds/poodle/n02099601_1003.jpg",
  },
  {
    id: 3,
    name: "Bella",
    age: 2,
    breed: "Siberian Husky",
    image: "https://images.dog.ceo/breeds/poodle/n02099601_1004.jpg",
  },
  {
    id: 4,
    name: "Max",
    age: 4,
    breed: "Bulldog",
    image: "https://images.dog.ceo/breeds/poodle/n02099601_1006.jpg",
  },
];

router.use((req, res, next) => {
  console.log("USER ROUTE - Time:", Date.now());
  next();
});

router.get("/", (req, res) => {
  return res.status(200).json(dogs);
});

module.exports = router;
