const express=require('express')
const app=express()
app.listen(3000,()=>{
    console.log('im running')
})

app.get("/test",(req,res)=>{
    res.send('hello babae')
    
})
app.get("/test/hey",(req,res)=>{
    res.send('hey')
})
