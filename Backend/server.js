const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

// console.log('🔍  imported app is:', app && app.handle ? '✔️ Express app' : app);


const server = http.createServer(app);

// app.listen(port, ()=>{
//     console.log(`Server running at http://localhost:${port}`);
// })
server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});
