const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const port = 5000;

app.use(cors());

const userRoutes = require('./routers/UserRoutes.js');
app.use('/user', userRoutes);

const userLogin = require('./routers/UserLogin.js');
app.use('/login', userLogin);

app.listen(port, () => {
    console.log("working")
})

mongoose.connect("mongodb+srv://test:test@harshit.q5po4.mongodb.net/?retryWrites=true&w=majority");


