require("dotenv").config();
const express = require("express");
const router = require('express').Router();

const app = express();
const userRouter = require("./api/users/user.router");
const swaggerDocument = require('./swagger.json');

//router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(express.json());





app.use("/api/users", userRouter);
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
