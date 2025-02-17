const Task = require('../models/Task');
const asyncWrapper = require("../middleware/async")
const {createCustomError, CustomAPIError} = require("../errors/custom-error")

//Retrieve all tasks
const getAllTasks = asyncWrapper (
  async (req, res) => {
    const tasks = await Task.find({}) 
    return  res.status(200).json({ tasks})
})

//Create Task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({task});
})

//Get a single task
const getTask = asyncWrapper( async (req, res, next) => {  
     const {id:taskID} = req.params;
  const task = await Task.findOne({_id: taskID});
  if (!task) {
    const error = new Error('Not Found')
    error.status = 404 ;
    return next(createCustomError(`No task with id: ${taskID})`))
  }
  res.status(200).json({task})
})

// Update a task with Patch Method
const updateTask = asyncWrapper( async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id: ${taskID})`))
  }
  res.status(200).json({ task })

})

// Delete task
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

//export modules
module.exports = {
    getAllTasks, getTask,  createTask, updateTask, deleteTask
}