const express = require("express")
const cors = require("cors")
const cars = require("./routes/car-router.js")

const server = express()
server.use(express.json())
server.use(cors())
server.use("/cars", cars)

module.exports = server
