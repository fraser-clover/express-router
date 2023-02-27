const express = require("express")
const {check, validationResult} = require("express-validator");
const router = express.Router()



// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get("/", (req, res) => {
    res.json(users)
})

router.get("/:id", (req, res) => {
    const user = users[req.params.id - 1]
    res.json(user)
})

router.post('/', [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.array() })
    }
    else {
        const { name, age } = req.body;
        users.push({ name, age });
        res.status(201).send({ users });
    }
});

router.put("/:id", (req, res) => {
  const {name, age} = req.body;
  users[req.params.id - 1] = ({name, age});
  res.status(201).send({users});
})

router.delete("/:id",  (req, res) => {
    users.splice(req.params.id - 1, 1);
    res.status(201).send({users});   
});

module.exports = router;
