import expressAsyncHandler from "express-async-handler"

export const getGoals = expressAsyncHandler(async(req, res) => {
    res.status(200).json({ message: 'get' })
})

export const setGoal = expressAsyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'set' })
})

export const updateGoal = expressAsyncHandler(async(req, res) => {
    res.status(200).json({ message: `update ${req.params.id}` })
})

export const deleteGoal = expressAsyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete ${req.params.id}` })
})