    
    const Task=require('../models/Task')
    const asyncwraper=require('../middelware/async')
    const {createCustomError}=require('../errors/coustom-error')
    const getAllTasks = asyncwraper(async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
      })
    const getTask=asyncwraper(async (req,res,next)=>{
    
        const { id: taskID } = req.params
        const task=await Task.findOne({ _id: taskID })
        // res=404 when id is not correct(replace char with onother or id deleted) only
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404))
        }
        res.status(200).json({
            task
        })   
         
       })
     const createTask=asyncwraper(async(req,res)=>{
        
            const task=await Task.create(req.body)
        res.status(200).json({
            task
        })
        
            res.status(404).json({
                msg:{error}
            })
        
        }    
        )
        const updateTask=asyncwraper(async (req,res)=>{
            
                const { id: taskID } = req.params
            const task=await Task.findOneAndUpdate({ _id: taskID } ,req.body,{
                new:true,// to update new inputs with ((RESPONSE)) if we remove this option, response get old value for this id not updated
               runValidators:true,// to run validators of model 
            })
            if(!task){return next(createCustomError(`No task with id ${taskID}`,404))}
            res.status(200).json({
                task
            })
            
        } )
        const deleteTask=asyncwraper(async(req,res)=>{
           
            const { id: taskID } = req.params
            const task=await Task.findOneAndDelete({ _id: taskID },req.body)
            if(!task){return next(createCustomError(`No task with id ${taskID}`,404))}
            res.status(200).json({
                task
            })
           
            res.status(500).json({
                msg:{error}
            })
           
        } )
module.exports={getAllTasks,getTask,createTask,updateTask,deleteTask}