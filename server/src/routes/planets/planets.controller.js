const express = require('express');
const planets = require('../../models/planets.model');

function getAllPlanets (req ,res) {
    console.log("hi");
    res.send("hello")
}

module.exports = {
    getAllPlanets
}