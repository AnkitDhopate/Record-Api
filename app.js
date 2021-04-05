const express = require("express");
const app = express();
const Record = require("./models/students");
require("./db/conn");

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/create", async (req, res) => {
  try {
    const user = new Record(req.body);

    const createRecord = await user.save();
    res.status(201).send(createRecord);
  } catch (error) {
    res.send(res.status(400).send(e));
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api", async (req, res) => {
  try {
    const api = await Record.find();
    res.status(201).send(api);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/api/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const indAPI = await Record.findById(_id);
    if (!indAPI) {
      res.status(404).send("error");
    } else {
      res.status(201).send(indAPI);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Connected at port ${port}`);
});
