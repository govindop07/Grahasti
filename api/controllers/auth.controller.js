import bcrypt, { hash } from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const emailExist = await User.findOne({email});
    const usernameExist = await User.findOne({username});
    if(emailExist) return res.status(403).json({message: "Email already exist"});
    if(usernameExist) return res.status(403).json({message: "Username already exist"});

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      avatar,
      password: hashedPassword,
    })

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message:"Failed to create user!"});
  }
}

export const login = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

    const user = await User.findOne(isEmail ? { email: identifier } : { username: identifier });
    if(!user) return res.status(400).json({message: "Invalid credentials"});

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

    const age = 1000*60*60*24*7;
    const token = jwt.sign( 
      {
        id: user._id,
        isAdmin: false,
      }, 
      process.env.JWT_SECRET_KEY, 
      { expiresIn: age } );
    
    res.cookie('jwt', token, {
      maxAge: age,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development'? true: false,
    })

    res.status(200).json({ 
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar
    })
  } catch (error) {
    console.log(error, "Error in login auth controller");
    res.status(500).json({message: "Internal Server Error"});
  }
}

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt").status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}