import express from "express";
import logger from "morgan";
import cors from "cors";

import adventCalendarRouter from "./routes/adventCalendar.js";

const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/items", adventCalendarRouter);

app.listen(PORT, function(){
    console.log(`server is listening on port ${PORT}`)
})
export default app;
