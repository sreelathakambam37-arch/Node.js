const express=require('express');
const mongoose=require('mongoose');
const UserData=require('./Model');
const app=express();

app.use(express.json());

mongoose.connect('').then(
    ()=>console.log('connected to database......')
).catch(err=>console.log(err))

app.post('/add_user', async (req,res)=>{
    const {username}=req.body;
    const {email}=req.body;
    try{
        const newData = new UserData({username,email});
        await newData.save();
        return res.json({message : "user data send successfully"});
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(3000,()=>console.log('server running on http://127.0.0.1:3000......'))


