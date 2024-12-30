import {Response, Request} from 'express'
import {Task} from './model/task.schema'

// GET
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find()

    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener las tareas.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    })
  }
}

// GET BY ID
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const task = await Task.findById(id)

    if (!task) throw new Error('Tarea no encontrada.')

    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener la tarea.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    })
  }
}

// CREATE
export const addTask = async (req: Request, res: Response) => {
  try {
    const {title, description} = req.body

    const task = new Task({
      title,
      description,
    })

    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrió un error al crear la tarea.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    })
  }
}

// UPDATE
export const updateTask = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const body = req.body

    const updatedTask = await Task.findByIdAndUpdate({_id: id}, body)

    if (!updatedTask) res.status(404).json({message: 'Tarea no encontrada'})

    res.status(200).json(updatedTask)
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrió un error al actualizar la tarea.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    })
  }
}

// DELETE
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)

    if (!deletedTask) res.status(404).json({message: 'Tarea no encontrada'})

    res.status(200).json(deletedTask)
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar la tarea.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    })
  }
}
