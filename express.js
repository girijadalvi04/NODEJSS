const express = require ('express')
const app = express()

// app.get('/about',(req, res)=>{
// res.send("Hello world");

// })

// app.post('/',(req, res)=>{
//     res.send("This is post method")
// })
// app.listen(4000);
const mongoose= require ('mongoose') 
mongoose.connect("mongodb+srv://girijadalvi:Girija%40123@cluster0.hq5sc.mongodb.net/DATABASE?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection created");
})
.catch((err)=>{
    console.error(err);
})
app.listen(4000);
