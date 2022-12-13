const express=require('express')
const router=express.Router()
const {getAllTasks,getTask,createTask,updateTask,deleteTask}=require('../controllers/tasks')
router.route('/',).get(getAllTasks).post(createTask)
// dif between put and patch 
// put=> client must send all feilds(need to update and not) of object ,has heigh bandwidth
// patch=> client send all feilds(need to updated only) of object,has low bandwidth 
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router