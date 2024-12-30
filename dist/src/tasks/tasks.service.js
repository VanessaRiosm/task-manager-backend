"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTaskById = exports.getTasks = void 0;
const task_schema_1 = require("./model/task.schema");
// GET
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_schema_1.Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({
            message: 'Ocurrió un error al obtener las tareas.',
            error: error instanceof Error ? error.message : 'Error desconocido',
        });
    }
});
exports.getTasks = getTasks;
// GET BY ID
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield task_schema_1.Task.findById(id);
        if (!task)
            throw new Error('Tarea no encontrada.');
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({
            message: 'Ocurrió un error al obtener la tarea.',
            error: error instanceof Error ? error.message : 'Error desconocido',
        });
    }
});
exports.getTaskById = getTaskById;
// CREATE
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const task = new task_schema_1.Task({
            title,
            description,
        });
        const newTask = yield task.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({
            message: 'Ocurrió un error al crear la tarea.',
            error: error instanceof Error ? error.message : 'Error desconocido',
        });
    }
});
exports.addTask = addTask;
// UPDATE
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedTask = yield task_schema_1.Task.findByIdAndUpdate({ _id: id }, body);
        if (!updatedTask)
            res.status(404).json({ message: 'Tarea no encontrada' });
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(500).json({
            message: 'Ocurrió un error al actualizar la tarea.',
            error: error instanceof Error ? error.message : 'Error desconocido',
        });
    }
});
exports.updateTask = updateTask;
// DELETE
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_schema_1.Task.findByIdAndDelete(req.params.id);
        if (!deletedTask)
            res.status(404).json({ message: 'Tarea no encontrada' });
        res.status(200).json(deletedTask);
    }
    catch (error) {
        res.status(500).json({
            message: 'Ocurrió un error al eliminar la tarea.',
            error: error instanceof Error ? error.message : 'Error desconocido',
        });
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasks.service.js.map