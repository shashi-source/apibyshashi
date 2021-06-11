const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
        
        dish:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        },
        prepareTime:{
            type:String,
            required:true,
        },
        serve:{
            type:Number,
            required:true,
        }
    
    

});

module.exports =mongoose.model('Posts',PostSchema);