
 const mongoose=require('mongoose')


const connectDB = async () => {
    await mongoose.connect("mongodb://HelloNode:kxw5QhmkmGeNcihs@ac-xjaog6m-shard-00-00.e62qoqq.mongodb.net:27017,ac-xjaog6m-shard-00-01.e62qoqq.mongodb.net:27017,ac-xjaog6m-shard-00-02.e62qoqq.mongodb.net:27017/devtinder?ssl=true&replicaSet=atlas-36qdd2-shard-0&authSource=admin&retryWrites=true&w=majority");
}

module.exports=connectDB







// const mongoose = require("mongoose");

// const uri = "mongodb://HelloNode:kxw5QhmkmGeNcihs@ac-xjaog6m-shard-00-00.e62qoqq.mongodb.net:27017,ac-xjaog6m-shard-00-01.e62qoqq.mongodb.net:27017,ac-xjaog6m-shard-00-02.e62qoqq.mongodb.net:27017/devtinder?ssl=true&replicaSet=atlas-36qdd2-shard-0&authSource=admin&retryWrites=true&w=majority";

// mongoose.connect(uri)
//   .then(() => console.log("✅ Mongoose connected successfully"))
//   .catch(err => console.error("❌ Mongoose failed to connect", err));




