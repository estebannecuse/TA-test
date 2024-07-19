require('dotenv').config()
const axios = require("axios");
const { Router } = require("express");
const express = require("express");
const server = express();
const port = process.env.PORT || 3000
const router = Router();

server.use(router);

router.get("/soyTA", async (req,res) =>{
    try {
       const response = await axios.get('https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json');
       console.log(response.data);
        res.status(200).send(response.data)
    } catch (error) {
        res.status(500).send({message: "algo salio mal"})
    }
})


server.listen(port, ()=>{
    console.log("Server is running on port " + port);
})