const express = require("express");
const errorMiddleware = require("./middleware/error.middleware");
const app = express();
const apiRouter = require("./routers/app.router");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", apiRouter);

app.use(errorMiddleware);

module.exports = app;
