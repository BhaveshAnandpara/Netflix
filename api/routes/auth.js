const router = require("express").Router()
const CryptoJS = require("crypto-js"); //For Hashing Passwords
const jwt = require("jsonwebtoken") //Save your Info so for authorizaton ( alternate for Cookies Basically)
const User = require("../Models/User")

//Authenticating Means To check Username and Password is correct ( Basically Login)
//Authorization means Is to check the user sending request to the server is the same person who logged in during Authentication.

//REGISTER 

router.post("/register" , async (req,res)=>{
    const newUser = new User({ //User Schema
        username : req.body.username,
        email : req.body.email, 
        password : CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(), //Encryptes Password
    });

    try{
        const user = await newUser.save()
        res.status(201).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//LOGIN

router.post("/login" , async (req,res)=>{

    try{

        const user = await User.findOne({email: req.body.email })
        !user && res.status(401).json("wrong Password or Username");

        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        // const pass = CryptoJS.AES.decrypt(user.password, process.env.SECRERT_KEY);

        originalText !== req.body.password && 
         res.status(401).json("wrong Password or Username")

        const accessToken = jwt.sign(
            {id : user._id , isAdmin : user.isAdmin }, //Sending Info for Authorization
            process.env.SECRET_KEY, //Key to Encode it
            {expiresIn:"5d"} //Login Exprires in 5 days need to login again
        )

        const { password , ...info } = user._doc //From the Schema or Model save password in password and other properties in array 'info' and store this password and info array in user._doc

        res.status(200).json({info, accessToken})

    }catch(err){
        res.status(500).json(err)
    }

})

module.exports = router