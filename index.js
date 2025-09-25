const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.route');
const ejs = require('ejs')
const cors = require('cors')


app.use(cors()) 
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
dotenv.config()




const URI = process.env.URI
mongoose.connect(URI)
.then(() => {
    console.log("Connected to MongoDB");
}) 
.catch((err) => {
    console.log("MongoDB connection Error", err);
})


// Use the routes file to handle all user-related endpoints
app.use('/user', userRoutes);



const port = process.env.port
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
    
})