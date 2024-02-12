const express=require("express")

const postRouter=express.Router();
 
const arrayOfObjects =[
    {id:1 , name:"obj1"},
    {id:2 , name:"obj2"},
    {id:3 , name:"obj3"}
];


postRouter.get("/all",(req ,res)=>{
    res.send(arrayOfObjects);
})
module.exports= postRouter ;

postRouter.get("/id",(req,res)=>{
    const id =req.params.id;
    const array=arrayOfObjects.find(user =>user.id==parseInt(id));
    res.send(array);
})