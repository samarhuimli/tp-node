const express =require("express");
const authRouter=require("./routes/auth");
const postRouter=require("./routes/post")
const app =express();

app.use("/auth" , authRouter );
app.use("/post", postRouter )

app.listen(5000 , ()=> {
    console.log("listninig on port 5000");
}
)

app.post('/add',()=> {
    console.log("add work");
}
)

app.get('/getall',()=> {
    console.log("getall work")
})

app.get('/hello',(req,res)=>{
    res.send("hello word");
})
app.get("/samar",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})


