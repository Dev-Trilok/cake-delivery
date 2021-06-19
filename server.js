const express=require('express')
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

const app=express()

app.use(express.static('public'))
app.use(express.static(__dirname+'/node_modules/bootstrap/dist/js/'))
app.use(express.static(__dirname+'/node_modules/@fortawesome/fontawesome-free/js/'))
app.get('/',(req,res)=>{
    res.render('home')
})

app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
console.log(path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs'); 

app.listen(3000,()=>{
    console.log('server started');
})