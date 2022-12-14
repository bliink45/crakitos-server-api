import express from "express";
import dotenv from "dotenv";
import { EventController } from "./controllers/events-controller.js";
import { eventDto } from "./dto/event-dto.js";

// Load .env file
dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.status(200).send({
        message: "Welcome to crakitos server api!",
    })
})

app.post("/event", async (req, res) => {
    await EventController.trigger(new eventDto(req.body));

    return res.status(200).send({
        message: "You triggered an event.",
    })
})

app.listen(PORT, async () => {
    console.log("crakitos-server-api listens on PORT", PORT);
})