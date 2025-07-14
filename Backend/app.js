const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', (req,res)=>{
    res.send('Helo')
})


// app.listen(3000, ()=>{
//     console.log(`Server running at http://localhost:3000`)
// });
module.exports = app;