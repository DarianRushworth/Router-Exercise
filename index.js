const express = require("express")
const router = require("./instantiate")

const app = express()

app.use(router)
const port = 4000

function onListen(){
    console.log(`Listening on port: ${port}`)
}

app.listen(
    port,
    onListen
)