const express=require('express')

const app=express();

app.listen(5000,()=>{
    console.log('Port started at 5000');
})

app.set('view engine', 'html')
app.use(express.static('views'))

app.get('/',(req,res)=>{
    
})