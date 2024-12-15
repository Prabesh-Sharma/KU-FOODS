"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({
        message: "hello from ts!!! & nodemon",
    });
});
app.get("/test", (req, res) => {
    res.json({
        message: "this is a testing route"
    });
});
app.listen(6969, () => {
    console.log("server started on port 6969");
});
