const jwt = require("jsonwebtoken")


const auth = (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(token){
        try {
            const decoded = jwt.verify(token, "yadav")
            if(decoded){
                next()
            }else{
                res.json({msg:"not authorised"})
            }
        } catch (err) {
            res.json({error: err.message})
        }
    }
    else{
        res.json({msg:" Please login"})
    }
}

module.exports= auth