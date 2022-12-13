class CustomAPIError extends Error{
constructor(message,statusCode){
    // invoke constractor of parent class
    super(message)
    this.statusCode=statusCode
}
}
const createCustomError= (message,statusCode)=>{
return new CustomAPIError(message,statusCode)
}
module.exports={createCustomError,CustomAPIError}