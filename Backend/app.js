// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');


connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/', (req,res)=>{
    res.send('Helo')
})

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);








// app.listen(3000, ()=>{
//     console.log(`Server running at http://localhost:3000`)
// });
module.exports = app;