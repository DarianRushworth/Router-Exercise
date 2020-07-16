const express = require("express")
const {Router} = express

const router = new Router()

router.get(
    "/hi/:name",
    (req, res) => res.send(`Hi ${req.params.name}`)
)
module.exports = router