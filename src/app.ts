import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app : express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: './.env' });

const PORT : Number = Number(process.env.PORT) || 3301;

console.log("TEST");

app.get("/message", async (request : Request, response : Response) => {
    try {
        console.log("Testing message");
        await response.status(200).json({ msg: "Hello World!" });
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
});

app.listen(PORT, () => {
    console.log("Server is started at PORT:", PORT);
});