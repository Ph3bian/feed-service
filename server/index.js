import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";
import asyncWrapper from "./middleware/asyncWrapper";

const app = express();
// CORS for the express server
app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());
const port = 3000;

app.get("/", (_, res) =>
  res
    .status(200)
    .json({ success: true, status: 200, message: "Hello from Feed Service" })
);
app.use("/", router);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
