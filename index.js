import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import 'dotenv/config'

// Note the order, create express app first, routing should be last
const app = express();

// This line approves requests from the URL passed into 'origin'
// by default, cross origin requests are blocked. The purpose of the cors module
// is to allow the programmer to configure how the server handles cross-origin requests
app.use(cors({
    origin: 'http://localhost:3000',
}));

// Note 'bodyParser' is deprecated
app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use('/studentRoute', studentRoutes);


const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

//This method may be outdated, see https://stackoverflow.com/questions/69030963/error-usefindandmodify-is-an-invalid-option
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then( () => app.listen(PORT, () => 
    console.log(`Connection on port ${PORT} successful`))
).catch((err) => console.log(err.message));


