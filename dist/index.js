"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_router_1 = __importDefault(require("./src/tasks/tasks.router"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
require("./src/mongo");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./src/swaggerConfig"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
app.use(express_1.default.json());
app.use('/api/tasks', tasks_router_1.default);
app.listen(process.env.PORT || 3000, () => console.log(`server running on port ${process.env.PORT}`));
exports.default = app;
//# sourceMappingURL=index.js.map