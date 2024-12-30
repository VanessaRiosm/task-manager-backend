"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = process.env.URI_DB || '';
mongoose_1.default
    .connect(URI)
    .then(() => console.log('database running'))
    .catch((err) => console.log(err));
//# sourceMappingURL=mongo.js.map