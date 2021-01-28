const express=require("express")
const app=express()
const port =process.env.PORT || 9000
app.use(express.json())
app.get("/health",(req,res)=> {
    return res.status(200).send('ss')
})
app.listen(port,()=>console.log(`server is running on ${port}`))
