import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const todos = [
	{ description: "My first todo", done: false }
];

app.get("/todos", function (req, res) {
	res.json(todos);
});

app.post("/todos", function (req, res) {
	todos.push(req.body);
})

app.listen(3000);
