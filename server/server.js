const express = require('express');
const app = express();
const test = require('./Router/test');


app.use('/api', test);

const port = 3002;


app.listen(port, ()=>{
    console.log(`server start ${port}`);
})
