const express = require ('express');
const mongoose = require('mongoose');
const { MONGO_URI} = require('./config');

// n76KUNSjoSRYFPFd password 
const postsRoutes=require('./routes/api/posts');

const app = express();


// /bodyparser Middel

app.use(express.json());



 //contact to mongo


 mongoose.connect(MONGO_URI, {
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useFindAndModify:false
 })
 .then(()=>console.log("connected"))
 .catch(err=> console.log(err));

 app.use('/api/post',postsRoutes);

const PORT = process.env.PORT || 2000;

app.listen(PORT,()=>console.log(`server ${PORT}`));