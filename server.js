import express from 'express'
import mongoose from 'mongoose'
import {User} from './Models/User.js'

const app = express();
//middleware for my url encoded
app.use(express.urlencoded({extended:true}))

// conection
mongoose.connect("mongodb+srv://sameer423j:sCJUzrX60YGIRUXT@cluster0.xiks97b.mongodb.net/" , {
    dbName: "sameerDatabase"
})
.then(() => console.log("MONGODB is connected"))
.catch((err) => console.log(err));



// route for ejs file 
app.get('/',(req , res )=>{
    res.render('index.ejs')
})

// route for data post 
app.post('/formsubmit', async(req , res )=>{
    // console.log(req.body)
    //db save code
    try {
        let user = await User.create(req.body)
        res.json({
        messege:"formSubmit",
        Newuser:user,
        success:true
    })
    } catch (error) {
        res.json({messege:error.message})
    }
    
})
const port  = 3000;
app.listen(port , ()=>console.log(`server is runing on port ${port}`))


