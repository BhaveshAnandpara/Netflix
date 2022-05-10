const jwt = require("jsonwebtoken")

function verify ( req,res,next){

    const authHeader = req.headers.token // authHeader = Bearer 32424n34324hbhbb45

    if(authHeader){
        const token = authHeader.split(" ")[1]  //token = 32424n34324hbhbb45
        jwt.verify( token , process.env.SECRET_KEY , (err,userInfo )=>{ //Will take token and Secret KEy and Return Either Error or The Authenticated info
            if(err) res.status(403).json("Token is Invalid")
            req.user = userInfo;
            next()
        }) 
    }else{
       return res.status(401).json("You are not Authenticated !")
    }
}

module.exports = verify; 