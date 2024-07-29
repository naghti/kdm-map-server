require('dotenv').config()
const  mongoose =  require('mongoose')
const express = require("express");
const cors = require('cors')
const path = require("path");
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

start()