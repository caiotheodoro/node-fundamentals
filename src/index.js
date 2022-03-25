const { response } = require('express');
const express = require('express')

const app = express();



app.get('/courses', (req,res) => {
    return res.json([
        "curso1",
        "curso2",
        "curso3"
    ])
})

app.post("/courses", (req,res) => {
    return res.json([
        "curso1",
        "curso2",
        "curso3",
        "curso4",
    ])
})

app.put("/courses/:id", (req,res) => {
    return res.json([
        "curso5",
    ])
})

app.patch("/courses/:id", (req,res) => {
    return res.json([
        "curso6",
        "curso2",
        "curso3",
        "curso4",
    ])
})

app.delete("/courses/:id", (req,res) => {
    return res.json([
        "curso6",
        "curso3",
        "curso4",
    ])
})

app.listen(3333)

