require('dotenv').config();

const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');

global.__basedir = __dirname;

app.use(bodyParser.json({extended: true }))

app.use('/assets', express.static('./assets'));

//database connection mongoose
const connectMongooseDB = require('./src/config/mongoose');
connectMongooseDB()

app.get('/',(req,res) => {
    res.send('Helle World')
})

app.use(require('./src/routes/user'))
app.use(require('./src/routes/test'))

app.listen(port,()=>{
    console.log('Exress app listening on port '+port)
})