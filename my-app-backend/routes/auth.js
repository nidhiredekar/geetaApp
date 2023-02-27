require('dotenv').config();
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET;
var jwt = require('jsonwebtoken');

const fetchusers = require('../middleware/fetchusers');

// ROUTE 1 : FOR CREATING A NEW USER
router.post('/createuser', [
            body('name', 'Enter a valid name').isLength({ min: 3 }),
            body('email', 'Enter a valid Email').isEmail(),
            body('password', 'Password must be atleast of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
            //if errors are there return bad request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                success= false
                return res.status(400).json({success, errors: errors.array() });
            }  //checking unique user
            try {
                let user = await User.findOne({ email: req.body.email });
                if (user) {
                    success= false
                    return res.status(400).json({success, errors: "Sorry user already exists" });
                }
                //create a new user with salted password
                const salt = await bcrypt.genSalt(10)
                const secPass = await bcrypt.hash(req.body.password, salt);
                user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: secPass,
                });
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                success = true;
                res.json({ success,authToken })
            } catch (err) {
                console.error(err);
                success = false;
                res.status(500).send(success,"Internal Server Error")
            }
})


//ROUTE 2: FOR LOGIN authentication

router.post('/login', [
                //some custome validation of input 
                body('email', 'Enter a valid Email').isEmail(),
                body('password', 'Enter Password !').exists(),
], async (req, res) => {
                //if errors are there return bad request
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }

                const { email, password } = req.body;
                try {
                    let user = await User.findOne({ email })
                    //if user is not found return bad request
                    if (user == null) {
                        return res.status(400).json({ errors: "Try giving correct credentials" })
                    }
                    const passwordcompare = await bcrypt.compare(password, user.password)
                    // if password is not correct return bad request
                    if (!passwordcompare) {
                        return res.status(400).json({ errors: "Try giving correct credentials" })
                    }
                    //if everything is ok return  
                    const data = {
                        user: {
                            id: user.id,
                        }
                    }
                    const authToken = jwt.sign(data, JWT_SECRET);
                    success = true;
                    res.json({ success,authToken })

                } catch (err) {
                    console.error(err);
                    success = false;
                    res.status(500).send(success,"Internal Server Error")
                }
})


//ROUTE 3: FOR LOGGED IN USER DETAILS

router.post('/getuser',fetchusers,async (req, res) => {
    //if errors are there return bad request

                try{
                    userId = req.user.id;
                    const user = await User.findById(userId).select("-password");
                    res.send(user);
                }catch (err) {
                    console.error(err);
                    success = false;
                    res.status(500).send(success,"Internal Server Error")
                }

})
    









module.exports = router