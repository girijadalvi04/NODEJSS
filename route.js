const express = require('express').Router();
const route = require('express').Router();

const userModule = require('./module')
//  encryption
// const bcrypt = require('bcrypt')
// 

// valid




    // 


    //    encrp

// 


    // 

    const newUser = new userModule({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        // password: req.body.password

    })
    try {
        const saveData = await newUser.save();
        res.send(saveData)

    }

    catch (error) {
        console.log(error);

    }


// showdata
route.get("/showData", async (req, res) => {
    try {
        const showdata = await userModule.find();
        res.send(showdata)
    }
    catch (error) {
        console.log(error);
    }
})
//    deletedata
route.delete("/delete", async (req, res) => {
    let id = req.query.id;
    try {
        const deleteData = await userModule.findByIdAndDelete(id)
        res.send('Delete data successfully')
    } catch (error) {
        console.log(error);
    }

})
//  updatedata

route.post("/update", async (req, res) => {
    let _id = req.body._id;
    try {
        const updateData = await userModule.findByIdAndUpdate(_id, req.body)
        res.send("Data updated successfully")
    } catch (error) {
        console.log(error);
    }
})
// showdone user
route.get("/showOne", async (req, res) => {
    const id = req.query.id
    try {
        const showdone = await userModule.findById(id)
        res.send(showdone)
    } catch (error) {
        console.log(error);
    }
})
module.exports = route;
