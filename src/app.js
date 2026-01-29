const express=require('express')
const app=express()
app.listen(3000,()=>{
    console.log('im running')
})
app.use("/jk",(req,res)=>{
    res.send('im jk')
})
app.get("/test/",(req,res)=>{
    res.send('hello babae')
    
})
app.get("/test/hey",(req,res)=>{
    res.send('hey')
})

app.post('/hello',(req,res)=>{
    res.send('asdfghjkl')
})