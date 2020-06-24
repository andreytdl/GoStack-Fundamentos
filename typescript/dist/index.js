"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CreateUsers_1 = __importDefault(require("./services/CreateUsers"));
var app = express_1.default();
app.get('/', function (req, res) {
    var user = CreateUsers_1.default({
        name: "Antônio",
        email: "Antonio@rocketseat.com.br",
        password: "123456"
    });
    return res.json(user);
});
app.listen(3333);
