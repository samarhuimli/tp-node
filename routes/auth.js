const express =require ("express")
//juste besoin de methode de router pas de tous express//
const authRouter =express.Router();

authRouter.get("/auth",(req ,res)=>{
    res.sendFile(__dirname+"/login.html")
});




authRouter.get("/register" , (req,res)=>{
    res.send('<h1>enregistré avec succés</h1>')
})



module.exports= authRouter ;