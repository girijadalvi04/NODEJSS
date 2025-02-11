const express = require('express')
const cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res){
    res.send("Hello world...")

  
})
let user = {
    name : "John",
    age: 23
}


// set cookie
app.get('/setuser', (req, res)=>{
    res.cookie('UserData', user);
    res.send("User data added to cookie")
})

// iterate
app.get('/getuser', (req, res)=>{
    res.send(req.cookies)
})

app.get('/logout', (req, res)=>{
    res.clearCookie('UserData')
    res.send("User logout succesfully")
})



app.listen(4000)

