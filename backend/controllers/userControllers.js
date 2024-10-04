const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken")

const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const pass = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: pass,
        pic
    });

    if (user) {

        const token = await generateToken(user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token
        })
    } else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }

};

const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {

        const token = await generateToken(user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token
        })
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password");
    }
}

module.exports = {
    registerUser,
    authUser
}