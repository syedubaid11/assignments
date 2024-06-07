const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup' ,async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:'Admin created succesfully'
    })
   
});

router.post('/courses', adminMiddleware, (req, res) => {
});

router.get('/courses', (req, res) => {
    res.json({
        message:"hi there"
    })
});

module.exports = router;