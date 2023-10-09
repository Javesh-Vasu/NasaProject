const express = require('express');

const app = express();

app.use(express.json);

const PORT = 3000;


app.get('/',(req,res)=>{
    res.send("welcome")
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`)
});









