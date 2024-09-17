require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express");
const cors = require('cors') // Required for CORS configuration
const path = require("path");
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000
const requestIp = require('request-ip');

const app = express()

// **CORS configuration:**
app.use(cors({
  origin: 'https://kdm-map.ru', // Replace with your client-side origin
  credentials: true // Enable cookies for cross-origin requests (if needed)
}));

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(requestIp.mw());
app.set('trust proxy', true)
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