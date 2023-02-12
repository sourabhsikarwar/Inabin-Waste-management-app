import User from "../models/userSchema.js";
import Request from "../models/requestSchema.js";
import Collection from "../models/collectionSchema.js";

export const getUser = async(request, response) => {
    try {
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

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
        id : user._id,
        name: user.name,
        user_type: user.user_type,
        email: user.email,
        contact : user.contact
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
    response
      .status(201)
      .json({
        message: "User Signed in",
        success: 1,
        name: user.name,
        user_type: user.user_type,
        email: user.email,
      });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};


export const analytics = async (request, response) => {
  try {
    console.log(request.params.id);
    const user = await User.findById(request.params.id);
    const collected = await Collection.find({collectorId : request.params.id});
    const req = await Request.find({collectorID : request.params.id});
    response.status(200).json({p:user.points, c: collected.length, r: req.length});
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
}

export const deleteAll = async(req,res) => {
  try {
    // await Request.deleteMany({});
    await Collection.deleteMany({});
    res.json({message : "All users deleted"});
  } catch (error) {
    res.status(404).json({message : error.message});
  }
}