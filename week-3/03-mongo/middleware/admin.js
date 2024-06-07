// Middleware for handling auth
const { Admin } =require("../db")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.body.username
    const password=req.body.password

    Admin.findOne({
        username:username,
        password:password
    })
    .then(function(value){
        if(value){
            next()
        }
        else{
            res.status(403).json({
                msg:"Admin doesn't exist"
            })
        }
    })
    res.json({
        username,
        password
    })
}

module.exports = adminMiddleware;