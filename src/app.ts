import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/users.routes";
import sessionsRoutes from "./routes/sessions.routes";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionsRoutes)

app.listen(3000, () => {
  console.log("Server running")
});
