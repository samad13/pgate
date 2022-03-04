const express = require("express");
const mongoose = require("mongoose");

const app = express()


const connectionString = 'mongodb://localhost:27017/progate';

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err) =>{
    if (err) {
        console.log(err)
    }else {
        console.log('database connection succesful')
    }
});

const userSchema = new mongoose.Schema({
    Email: String,
    text: String,
    
})
const User = mongoose.model('user',userSchema)

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.post('/',(req, res) => {
   User.create({
        Email:req.body.Email,
        text:req.body.text
    },(err)=>{
        if (err) {
            return console.log("error")
        } else {
            return console.log("new user saved")
        }
    })
 
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));