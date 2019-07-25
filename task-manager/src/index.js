const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save(req.body)
    .then(() => {
      res.status(201).send(user);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(error => {
      res.status(500).send();
    });
});

app.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      console.log(user);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send();
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save(req.body)
    .then(() => {
      res.status(201).send(task);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      if (!tasks) {
        return res.send("No tasks found");
      }
      res.send(tasks);
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch(e => {
      res.status(500).send({ error: e.message });
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
