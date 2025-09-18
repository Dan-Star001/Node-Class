// const customerModel = require('../models/user.model');
import customerModel from '../models/user.model.js';
import nodemailer from 'nodemailer';
// const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer');


// Handles the GET request for the signup page
const getSignup = (req, res) => {
    res.render('signup');
};

// Handles the GET request for the signin page
const getSignin = (req, res) => {
    res.render('signin');
};

// Handles the POST request for user registration
const postSignup = (req, res) => {
    let newCustomer = new customerModel(req.body);
    console.log(req.body);
    
    newCustomer.save()
        .then(() => {
            // // Transporter means the informarion about the service you are using to send the email
            // let transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: 'adedayodaniel1711@gmail.com',
            //         // a special password generated from google settings not your original password
            //         // Step one: Enable 2-step verification
            //         // Step two: Generate app password
            //         pass: 'pelfpjxxtytmbxkr'
            //     }
            // });

            // // This is the information about the email you are sending
            // let mailOptions = {
            //     from: 'adedayodaniel1711@gmail.com',
            //     to: [req.body.email, 'davidsome2004@gmail.com', 'danieladedeji49@gmail.com', 'adedayoadeboye0107@gmail.com' ],
            //     subject: 'Welcome to our Application',
            //     html: `
            //             <div style="background-color: #f4f4f4; padding: 0 0 10px; border-radius: 30px 30px 0 0  ;">
            //                 <div style="padding-top: 20px; height: 100px; border-radius: 30px 30px 0 0 ; background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );">
            //                     <h1 style="color:white; text-align: center;">Welcome to our Application</h1>
            //                 </div>
            //                 <div style="padding: 30px 0; text-align: center;">
            //                     <p style="font-size: 18px;"><span style="font-weight: 600;">Congratulations!</span> Your sign-up was successful!</p>
            //                     <p>Thank you for registering. We are excited to have you on board.</p>
            //                     <div style="padding: 20px 0;">
            //                         <hr style="width: 50%;">
            //                         <p style="margin-bottom: 10px;">Best Regards</p>
            //                         <p style="color: #f89b29; margin-top: 0;">Dan Star</p>
            //                     </div>
            //                 </div>
            //             </div>
            //     `
            // };
            // // This is what will actually send the email
            // transporter.sendMail(mailOptions, function(error, info){
            // if (error) {
            //     console.log(error);
            // } else {
            //     console.log('Email sent: ' + info.response);
            // }
            // });
            res.redirect("/user/signin");
        })
        .catch((err) => {
            console.error("Error registering customer:", err);
            // res.status(500).send("Internal server error");
        });
};

// Handles the POST request for user login
const postSignin = (req, res) => {
    const { email, password } = req.body;

    

    // customerModel.find is used to search the database for a user with the provided email and password
    customerModel.findOne({ email: email})
        .then((foundCustomers) => {
            if (foundCustomers) {
                // If a matching user is found, redirect to the dashboard
                res.redirect('/user/dashboard');
            } else {
                // If no matching user is found, send an error message
                res.send("Invalid email or password. Please try again.");
            }
        })
        .catch((err) => {
            console.error("Error during signin:", err);
            res.status(500).send("Internal server error");
        });
}

// Handles the GET request for the dashboard
const getDashboard = (req, res) => {
    customerModel.find()
        .then((allCustomers) => {
            console.log(allCustomers);
            res.render('dashboard', { allCustomers });
        })
        .catch((err) => {
            console.error("Error fetching customers:", err);
            res.status(500).send("Internal server error");
        });
};

export { getSignup, getSignin, postSignup, postSignin ,getDashboard };
// module.exports = { getSignup, getSignin, postLogin, getDashboard };