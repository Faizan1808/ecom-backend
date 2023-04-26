const express = require('express')
const { collection } = require('../database/mongoos')

const router = express.Router()

router.use(express.json())

router.post('/login', async (req, res) => {

    const { email, password } = req.body
    try {

        const check = await collection.findOne({ email: email })
        if (check) {
            res.json("Email Already Exist")
        }
        else {
            res.json("not exist")
        }
    }
    catch {
        res.send("not exist")
    }
})

module.exports = router
