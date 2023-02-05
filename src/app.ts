import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/users.routes";
import sessionsRoutes from "./routes/sessions.routes";

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionsRoutes)

app.listen(3000, () => {
  console.log("Server running")
});
