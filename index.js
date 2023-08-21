const express = require ('express');
const app = express();

app.get ('/user', (req,res) => {
    resizeBy.send({"id":22, "name": "senghak"});
});

app.listen(5000,()=>{
    console.log ('Express Server is Running at post Number 5000');
});