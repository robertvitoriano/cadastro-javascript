const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();
const PORT = 4000

require('./database');
app.use(express.json());
app.use(cors());
app.use(routes);



app.listen(PORT,()=>{
    console.log('My app is running on '+PORT);
})