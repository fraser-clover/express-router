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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


