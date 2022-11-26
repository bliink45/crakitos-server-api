import express from "express";
import { EventController } from "./controllers/events-controller.js";
import { eventDto } from "./dto/event-dto.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to crakitos server api!",
    })
})

app.post("/event", async (req, res) => {
    console.log("req", req);
    EventController.trigger(new eventDto(req.body));

    res.status(200).send({
        message: "You triggered an event.",
    })
})

app.listen(PORT, async () => {
    console.log("crakitos-server-api listens on PORT", PORT);
})