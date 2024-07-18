const express=require('express');

const data = require('./json/my_data.json');

// console.log(data);



const app = express();
const port=3000;

app.get('/',async (req,res)=>{
    
    res.json(data);
   
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});