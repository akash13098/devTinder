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

// app.get('/ab?c',(req,res)=>{
//     res.send('hello world')
// })

app.get('/abc/:abcid/:name', (req, res) => {
    console.log(req.params)
    res.send('hello world');
});

app.use('/user',(req,res,next)=>{
    // res.send('im 1st')
    next()
},(req,res,next)=>{
    // res.send('im 2nd')
    next()
},(req,res,next)=>{
    // res.send('im 3rd')
    next()
},(req,res)=>{
    res.send('im 4th')
},(req,res)=>{
    res.send('im 5th')
},)
