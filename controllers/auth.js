const { validationResult }  = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const key = "A secret key 123!";

    try {
        const encPassword = await CryptoJS.AES.encrypt(password,key).toString();

        const userDetails = {
            name: name,
            email: email,
            password: encPassword
        }

        const result = await User.save(userDetails)

        res.status(201).json({ message: 'User is registered!' })
    } catch (err) {
        
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);

    }
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    

    try {
        const user = await User.find(email);

        if (user[0].length !== 1) {
            const error = new Error('A user with this email was not found!');
            error.statusCode = 401;
            throw error;
            
            
        }

        const storedUser = user[0][0];
        const storedpass = storedUser.password.trim();
        const key = "A secret key 123!";

        const passdec = await CryptoJS.AES.decrypt(storedpass,key).toString(CryptoJS.enc.Utf8);
        const entpass = password.toString();
        var isEqual = false;
                            
        if (entpass == passdec) {
            isEqual = true;
        } else {
            isEqual = false;
        }

        // console.log(isEqual);

        // console.log(passdec);
        // console.log(password);

        if (!isEqual) {
            const error = new Error('Wrong Password!');
            error.statusCode = 401;
            throw error;
             
        }

        const token = jwt.sign(
            {
               email: storedUser.email,
               uuserId: storedUser.id 
            },
            'secretfortoken',
            { expiresIn: '1h' }
        );

        res.status(200).json({ token:token, userId: storedUser.id });

    } catch (err) {
        
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);

    }
    
};
