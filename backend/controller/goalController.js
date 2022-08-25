import expressAsyncHandler from "express-async-handler"

import Goal from "../models/goalModel.js"
import User from "../models/userModel.js"

export const getGoals = expressAsyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})

export const setGoal = expressAsyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })


    res.status(200).json(goal)
})

export const updateGoal = expressAsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.user.id)

    if (!goal) {
        res.status(404)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.params.id)

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedGoal)
})

export const deleteGoal = expressAsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(404)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.params.id)

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
})