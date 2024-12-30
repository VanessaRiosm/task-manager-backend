import {Router} from 'express'
import {
  addTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from './tasks.service'

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - completed
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único de la tarea.
 *         title:
 *           type: string
 *           description: Título de la tarea.
 *         description:
 *           type: string
 *           description: Descripción de la tarea.
 *         completed:
 *           type: boolean
 *           description: Estado de la tarea.
 *       example:
 *         _id: 6435a2a0e1b6f2ab7c2a3e4f
 *         title: Comprar víveres
 *         description: Comprar leche, huevos y pan.
 *         completed: false
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtiene la lista de tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Error al obtener tareas
 */
router.get('/', getTasks)

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       description: Información de la tarea a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Error al crear la tarea.
 */
router.post('/', addTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la tarea
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al obtener la tarea
 */
router.get('/:id', getTaskById)

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateTask:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Título de la tarea.
 *         description:
 *           type: string
 *           description: Descripción de la tarea.
 *         completed:
 *           type: boolean
 *           description: Estado de la tarea.
 *       example:
 *         title: Comprar víveres
 *         description: Comprar leche, huevos y pan.
 *         completed: true
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualiza una tarea existente por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la tarea
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Información de la tarea a actualizar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTask'
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al actualizar la tarea
 */
router.put('/:id', updateTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la tarea
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al eliminar la tarea
 */
router.delete('/:id', deleteTask)

export default router
