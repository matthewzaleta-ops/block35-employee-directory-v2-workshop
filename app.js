import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  res.status(500).send("Sorry, something went wrong :(");
});
