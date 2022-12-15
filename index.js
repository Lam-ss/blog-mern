import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:55555@cluster0.irmuytj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("111hello");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  if (req.body.email === "test@text.ru") {
    const token = jwt.sign(
      {
        email: req.body.email,
        fullName: "Вася пупкин",
      },
      "secret123"
    );
  }

  res.json({
    seccess: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
