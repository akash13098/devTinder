
const express=require('express')
const connectDB=require('./config/database')
const app=express()
const {adminauth}=require('./middlewares/auth')
const {User,Client,Login}=require('./models/user')

connectDB()
.then(()=>{
    console.log('connected to database')
    app.listen(3000,()=>{
        console.log('server started')
    })
})
.catch((err)=>{
    console.log("failed to connect DB",err)
})

app.post('/signup',async(req,res)=>{
    const user=new User({
        firstName:"om",
        lastName:"patil",
        email:"om@gmail.com"
    })
    await user.save()
    res.send('user added Successfully')
})
app.post('/client',async(req,res)=>{
    const client=new Client({
        firstName:"jay",
        lastName:"sharma",
        email:"jay@gmail.com"
    })
    try{
        await client.save()
        res.send('cliented added succesfully')
    }
    catch{
        res.status(400).send('something went wrong')
    }
})
app.post('/login',async(req,res)=>{
    const llogin=new Login({
        firstName:"om",
        lastName:"patil",
        email:"om@gmail.com"
    })
    await llogin.save()
    res.send('user added Successfully')
})

// app.use("/jk",(req,res)=>{
//     res.send('im jk')
// })
// app.get("/test/",(req,res)=>{
//     res.send('hello babae')
    
// })
// app.get("/test/hey",(req,res)=>{
//     res.send('hey')
// })

// app.post('/hello',(req,res)=>{
//     res.send('asdfghjkl')
// })

// // app.get('/ab?c',(req,res)=>{
// //     res.send('hello world')
// // })

// app.get('/abc/:abcid/:name', (req, res) => {
//     console.log(req.params)
//     res.send('hello world');
// });

// app.use('/user',(req,res,next)=>{
//     // res.send('im 1st')
//     next()
// },(req,res,next)=>{
//     // res.send('im 2nd')
//     next()
// },(req,res,next)=>{
//     // res.send('im 3rd')
//     next()
// },(req,res)=>{
//     res.send('im 4th')
// },(req,res)=>{
//     res.send('im 5th')
// },)


// app.use('/admin',adminauth)
// app.get('/admin/getdata',(req,res)=>{
//     res.send('hello admin')
// })

// app.get('/admin/deletdata',(req,res)=>{
//     res.send('hello admin..')
// })




// // app.use('/admin',(req,res,next)=>{
// //     res.send('hello. admin')
// //     next()
// // })



// app.get('/getuserdata',(req,res)=>{
//     throw new Error('error')
//     res.send('hello user')
// })
// app.use('/',(req,res)=>{
//     res.send('im false')
// })
// app.use((err,req,res,next)=>{
//     if(err){
//     res.status(500).send('something wrong')
//     }
// })