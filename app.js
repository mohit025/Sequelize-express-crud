const express = require('express');

const app = express();
const apiRoutes = require('./routes');
const {sequelize,connectToDb} = require('./db');
const Task = require('./models');





app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(apiRoutes);

app.get('/', (req,res)=>{
    res.status(200).json({message:"hello world"});
})

app.listen(3000,()=>{
console.log("Server started");
})