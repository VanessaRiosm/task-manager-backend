"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)('Task', taskSchema);
taskSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id;
        delete returnObject._id;
    },
});
//# sourceMappingURL=task.schema.js.map