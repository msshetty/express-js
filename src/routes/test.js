const express = require('express')
const router = express.Router();

router.get('/test', (req,res) =>{
    res.json('Test List')
})

module.exports = router;