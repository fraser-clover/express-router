const express = require("express")
const app = express()
const port = 3000
app.use(express.json());
const { User } = require("./routes/Users");

// Express Routes

const usersRouter = require("./routes/users")
const fruitsRouter = require("./routes/fruits")

app.use("/users", usersRouter)
app.use("/fruits", fruitsRouter)


app.post('/users',  (req, res) => {
  const {name, age} = req.body;
  const newUser = users.push({name, age});
  res.status(201).send({newUser});
});

// app.post('/fruits', async (req, res) => {
//   const {name, color} = req.body;
//   const newFruit = await Fruits.create({name, color});
//   res.status(201).send({newFruit});
// });

// app.put("/users/:id", async (req, res) => {
//   const singleUser = await User.findByPk(req.params.id);
//   const {name, age} = req.body;
//   singleUser.update({name, age});
//   res.status(201).send(singleUser);
// })
// app.put("/fruits/:id", async (req, res) => {
//   const singleFruit = await Fruits.findByPk(req.params.id);
//   const {name, color} = req.body;
//   singleUser.update({name, color});
//   res.status(201).send(singleFruit);
// })

// app.delete("/users/:id", async (req, res) => {
//     const singleUser = await Users.findByPk(req.params.id);
//     await singleUser.destroy();
//     res.sendStatus(204);
// });

// app.delete("/fruits/:id", async (req, res) => {
//     const singleFruit = await Fruits.findByPk(req.params.id);
//     await singleFruit.destroy();
//     res.sendStatus(204);
// });



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


