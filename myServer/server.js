'use strict';
const express = require('express');
const server = express();
const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`listening on ${PORT} : I am ready`);
})