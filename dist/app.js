"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
dotenv_1.default.config({ path: './.env' });
const PORT = Number(process.env.PORT) || 3301;
console.log("TEST");
app.get("/message", async (request, response) => {
    try {
        console.log("Testing message");
        await response.status(200).json({ msg: "Hello World!" });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
});
app.listen(PORT, () => {
    console.log("Server is started at PORT:", PORT);
});
//# sourceMappingURL=app.js.map