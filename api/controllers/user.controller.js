import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  const id = req.params._id;
  try {
    const user = await User.findOne({id});
    res.status(200).json(user);
  } catch (error) {
    console.log(error.respone);
    res.status(500).json({ message: "error in get user controller" });
  }
}

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  let updatedPassword = null;
  try {
    // const user = User.findById(id);
    // if(user.username === inputs.username) return res.status(200).json({ message: "Profile Updated Successfullyyyy" });
    const usernameAlreadyExists = await User.findOne({ username: inputs.username })
    if(usernameAlreadyExists) return res.status(403).json({ message: "Username already exist"});
    // console.log('us', user);

    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updateData = {
      ...inputs,
      ...(updatedPassword && { password: updatedPassword }),
      ...(avatar && { avatar }),
    };

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true, fields: { password: 0 } }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update user!" });
  }
};
