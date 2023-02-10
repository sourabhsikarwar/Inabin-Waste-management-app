import User from "../models/userSchema.js";

// User Login
// Param : param, password
export const userLogin = async (request, response) => {
  try {
    var user = await User.findOne({
      $or: [
        { email: request.body.param },
        { contact: request.body.param },
        { username: request.body.param },
      ],
    });
    if (user === null) {
      return response.json({ message: "User not found", success: 0 });
    }
    let correctuser = null;
    if (user.password === request.body.password) {
      response.json({
        message: "User logged in",
        success: 1,
        username: user.username,
        user_type: user.user_type,
        email: user.email,
      });
      return;
    }
    response.json({ message: "Incorrect password", success: 0 });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// User Register
export const userRegister = async (request, response) => {
  try {
    console.log(request.body);
    const user = new User({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      user_type: request.body.user_type,
      address: request.body.address,
      contact: request.body.contact,
    });
    const newUser = await user.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
