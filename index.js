import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to crakitos server api!",
    })
})

app.post("/event", (req, res) => {
    console.log(req);
    res.status(200).send({
        message: "You triggered an event.",
    })
})

app.listen(PORT, async () => {
    console.log("crakitos-server-api listens on PORT", PORT);
})