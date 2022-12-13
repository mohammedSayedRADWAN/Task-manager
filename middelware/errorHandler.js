const {CustomAPIError}=require('../errors/coustom-error')
const errorHandeler=(error,req,res,next)=>{
    if(error instanceof CustomAPIError){
        return res.status(error.statusCode).json({msg:error.message})
    }
return res.status(500).json({msg:'Somthing is wrong please try again'})
}
module.exports=errorHandeler