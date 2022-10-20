const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
})


const searchRoute = require('./routes/search');

app.use(cors());
app.use(bodyParser.json());
app.use("/", searchRoute);


const port = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log(`Server started on port: ${port}`);
});