const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./src/config/mongo");
const blogRouter = require("./src/routes/BlogRoutes");

const PORT = process.env.PORT;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
    connectDB();
});

module.exports = app