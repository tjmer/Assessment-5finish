const express = require("express");
const cors = require("cors");
const ctrl = require("./controller.js")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", ctrl.getComplement);

app.get("/api/fortune", ctrl.getFortune);

app.get("/api/people", ctrl.allPeople);

app.post("/api/people", ctrl.addPerson);

app.delete('/api/people/:id', ctrl.deletePerson);

app.listen(4000, () => console.log("Server running on 4000"));
