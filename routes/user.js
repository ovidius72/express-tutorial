const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Joe",
    email: "joe@example.com",
  },
];

router.use((req, res, next) => {
  console.log("USER ROUTE - Time:", Date.now());
  next();
});

router.get("/", (req, res) => {
  return res.status(200).json(users);
});

module.exports = router;
