const adminauth=(req,res,next)=>{
    const token="xyz"
    const admin=token==="xyz"
    if(!admin){
        res.status(401).send('authentication failed')
    }
    else{
        next()
    }
}
module.exports={
    adminauth
}