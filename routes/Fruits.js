const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator");


// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get("/", (req, res) => {
    res.json(fruits)
})

router.get("/:id", (req, res) => {
    const fruit = fruits[req.params.id - 1]
    res.json(fruit)
})



router.post('/', [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.array() })
    }
    else {
        const {name, color} = req.body;
  fruits.push({name, color});
  res.status(201).send({fruits});
    }
});

router.put("/:id", (req, res) => {
  const {name, color} = req.body;
  fruits[req.params.id - 1] = ({name, color});
  res.status(201).send({fruits});
})

router.delete("/:id",  (req, res) => {
    fruits.splice(req.params.id - 1, 1);
    res.status(201).send({fruits});   
});

module.exports = router

