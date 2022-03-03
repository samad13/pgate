const express = require("express");
const mongoose = require("mongoose");

const app = express();


const connectionString = 'mongodb://localhost:27017/pgate';







app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))












const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));