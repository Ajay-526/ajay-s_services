const express=require('express')
const path = require('path')
const app=express();

app.listen(5000,()=>{
    console.log('Port started at 5000');
})

app.set('view engine', 'html')

app.use(express.static('views'));
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})