const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { usersdata } = require("./data/data");
const colors = require("colors");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();
const app = express();



app.use(express.json()); //to accept JSON data

app.get("/",(req, res)=> {
    res.send("API is Running Successfully");
})

app.get("/api/usersdata", (req,res) => {
    res.send(usersdata);
});
app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));