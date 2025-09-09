const customerModel = require('../models/user.model');

// Handles the GET request for the signup page
exports.getSignup = (req, res) => {
    res.render('signup');
};

// Handles the GET request for the signin page
exports.getSignin = (req, res) => {
    res.render('signin');
    console.log("I have signed in");
};

// Handles the POST request for user registration
exports.postLogin = (req, res) => {
    let newCustomer = new customerModel(req.body);
    newCustomer.save()
        .then(() => {
            res.redirect("/user/dashboard");
        })
        .catch((err) => {
            console.error("Error registering customer:", err);
            res.status(500).send("Internal server error");
        });
};

// Handles the GET request for the dashboard
exports.getDashboard = (req, res) => {
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