const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: "You successfully landed on My App API" })
});


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully 🔥🔥🔥");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);

app.listen(port, () => {
    console.log(`Server is running on port😊: ${port}`);
});
