const express = require('express')
const blockRoutes=require('./Routes/blockRoutes')
const app = express()
require('dotenv').config();
const port =process.env.PUERTO

app.use(express.json());

app.use('/api', blockRoutes);


app.listen(port, () => {
    console.log("server running", port)
})