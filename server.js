const express = require("express");

const app = express();

require("dotenv").config();

const PORT = 5000;


app.listen(PORT, console.log(`Server running on port ${PORT}`))