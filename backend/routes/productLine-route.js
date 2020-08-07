const express = require('express');

const router = express.Router();

const products = ["Open Fusion", "Fine Fusion", "Lap Fusion"]

router.get('/user', (req,res,next) => {
    res.json('<h1>RZ</h1>')

})

module.exports = router;