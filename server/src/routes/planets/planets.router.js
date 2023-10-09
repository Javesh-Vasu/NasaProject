const express = require('express');
const app = express();

const {
    getAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets',(req,res)=>{
    res.send("hello");
});

module.exports = planetsRouter;