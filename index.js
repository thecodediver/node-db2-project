require("dotenv").config()

const server = require("./data/server.js")

const port = process.env.PORT || 3025

server.listen(port, () => console.log(`\n** server up on port ${port} **\n`))
