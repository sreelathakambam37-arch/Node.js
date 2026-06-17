const express=require('express');
const mongoose=require('mongoose');
const UserData=require('./Model');
const app=express();

app.use(express.json());


mongoose.connect('mongodb+srv://sreelathakambam37_db_user:sTXQ1enPc5YssUxO@cluster0.e4wcv65.mongodb.net/').then(
    ()=>console.log('connected to database......')
).catch(err=>console.log(err))

app.post('/add_user', async (req,res)=>{ 
    const {username} = req.body;
    const {email} = req.body;
    try{
        const newData = new UserData({username,email});
        awaitnewData.save();
        return res.json({message: "user data send succesfully"});
    }    
    catch(err){
        console.log(err.message);
    }
});

app.put('/update/:id', async (req,res)=>{
    const {username} = req.body;
    const {email}  = req.body;
    try{
        await UserData.findByIdAndUpdate(req.params.id, {username,email},{new:true});
        return res.json({message: "user data updated successfully"});
    }
    catch(err){
        console.log(err.message);
    }
<<<<<<< HEAD
});
=======
})

app.listen(3000,()=>console.log('server running on http://127.0.0.1:3000......'))
>>>>>>> 63e8fbc253f368de9637ecbc778ea2e4e7818e10


app.listen(3000,()=>console.log('server running on http://127.0.0.1:3000.......'))