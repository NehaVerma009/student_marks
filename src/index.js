const express=require('express')
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose')


const route=require("./route/route")
const app= express()  

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://NehaVerma009:A9CEHRbpunBJ90to@cluster0.r6xdcuv.mongodb.net/Student_marks", {useNewUrlParser:true})
.then(()=> console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});