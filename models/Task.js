const mongoose=require('mongoose')
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please fill name'],
        trim:true,
        maxlength:[20,'name can not be more than 20']
    },
    //Important note if you not end last attribute with comma (,)it not reading
    completed:{
        type:Boolean,
        default:false
    },
});
module.exports=mongoose.model('Task',TaskSchema)