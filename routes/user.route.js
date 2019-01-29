const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const User = require('../db/user.model');
const bodyParser = require('body-parser');
const asm  = require('../utils/async_middleware');   ///middleware function to shorten code instead of write .catch(err)....
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

//GET ALL USERS
router.get('/', asm(async(req, res,next) => {
    const allUsers = await User.find({})
                                     .select(`-_id 
                                        email 
                                        fullname 
                                        username
                                        password`)
                                            // User.find()
    res.json({allUsers})                    //     .then(data => {
     }));                                   //         res.json(data);
                                            //     })
//GET A SINGLE USER                                            
router.get('/:email',asm(async(req,res,next)=>{
    const user = await User.find({email:req.params.email,})
                                    .select(`-_id
                                            email 
                                            fullname 
                                            username
                                            password`)
  if (!user) return res.status(404).send("such user is not found.")
  res.status(200).json(user)
}))

//CREATE NEW USER
router.post('/',asm(async(req,res,next)=>{ 
            const user =  new User(req.body);
            const newUser = await user.save();
            res.json(newUser);
    
}));
// router.post('/create', (req, res) => {
    
//     const user = new User({
//         // _id: mongoose.Types.ObjectId(),
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email
//     });
//     user.save()
//     .then((test) => {console.log(test);
//         res.json({ massage: "created" })})
//         .catch(err => {
//             console.log(err);
//             next(err);
//         })
// });

router.put('/update/:id', asm(async(req, res,next) => {
    const findNupdate = await User.findOneAndUpdate({_id:req.params.id},req.body);
     res.json(findNupdate);
    // User.findOneAndUpdate({_id:req.params.id},req.body)//req.body = {first_name: req.body.first_name,last_name: req.body.last_name,email: req.body.email} 
    //                                                    // short way is req.body!                                              
    //      .then(updated => res.json({
    //          status:"updated"
    //      }))
}));
// router.put('/update', (req, res) => {
//     res.json({ msg: 'updated' })
// });

router.delete('/delete/:id', asm(async(req, res,next) => {
    const toRemove = await User.findOneAndRemove({_id:req.params.id},req.body);
    res.json(toRemove);
    console.log(toRemove)
    // console.log(toRemove);
    // res.json("removed");
    // User.remove({_id:req.body.id},req.body)
    //     .then(deleted => res.json({
    //          status :"deleted"
    // }))
}));


module.exports = router;