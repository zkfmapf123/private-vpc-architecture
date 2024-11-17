import express from 'express'

const app = express()
app.use(express.json())

app.get("/ping", (req,res) => {
    console.log("ping...")

    return res.status(200).json("hello world")
})

app.get("/user",(req,res) => {
    console.log("user...")
    
    return res.status(200).json("users...")
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`${process.env.PORT || 3000} is connect`)
})
