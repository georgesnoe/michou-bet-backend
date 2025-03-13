const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(express.json())
app.usee(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Test of the vercel app")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

module.exports = app