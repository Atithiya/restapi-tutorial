const express = require("express");
const users = require("./db.json"); //require database เข้ามา

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(users);
});

// Get
app.get("/:id", (req, res) => {
  res.json(users.find((row) => row.id == req.params.id));
});

// Post
app.post("/", (req, res) => {
  users.push(req.body);
  let data = req.body;
  res.json({ dataname: data.name });
});

// Update
app.put("/:id", (req, res) => {
  const updateIndex = users.findIndex((users) => users.id == req.params.id);
  users[updateIndex].name = req.body.name;
  res.json({ data: "success" });
});

// Delete
app.delete("/:id", (req, res) => {
  const updateIndex = users.findIndex((users) => users.id == req.params.id);
  users.splice(updateIndex, 1);
  res.json({ data: "Deleted success" });
});

// เรียกใช้ Port
app.listen(port, () => {
  console.log(`Listening on PORT 4000`);
});
