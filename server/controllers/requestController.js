import Request from "../models/requestSchema.js";
import dotenv from "dotenv";
import twilio from "twilio";

const client = twilio(
  "AC7bf4c79f11aa461a41c6bacecbaab811",
  "16aaec778ca5d49db7f6c9589dbcf263"
);
// const client = require('twilio')(accountSid, authToken);

dotenv.config();

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_NUMBER = process.env.TWILIO_NUMBER;

// get request for all pickups
export const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

// get a particular pickup request
export const getRequest = async (req, res) => {
  try {
    console.log(req.body);
    const request = await Request.findById(req.body.id);
    console.log(request);
    res.status(200).json(request);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// post request for pickup task
export const createRequest = async (req, res) => {
  try {
    const data = new Request({
      requestUser: req.body.reqUserValue,
      requestEmail: req.body.emailValue,
      contact: req.body.contactValue,
      address: req.body.userAddressValue,
      dateOfCompletion: null,
      status: "started",
    });
    const newRequest = await data.save();
    await client.messages
      .create({
        body: `Hi ${req.body.reqUserValue}, your request for waste pickup has been received. We will contact you soon. Your unique request ID is ${newRequest._id}`,
        from: "+13854620884",
        to: `+91${req.body.contactValue}`,
      })
      .then((message) => console.log(message.sid));
    console.log("F");
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update request after collecting the waste
// export const updateRequest = async (req, res) => {
//   try {
//     const {
//       requestUser,
//       requestEmail,
//       contact,
//       address,
//       uniqueRequestID,
//       dateOfCompletion,
//       status,
//     } = req.body;

//     const updatedRequest = await Request.findByIdAndUpdate(
//       req.params.id,
//       {
//         requestUser,
//         requestEmail,
//         contact,
//         address,
//         uniqueRequestID,
//         dateOfCompletion,
//         status,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedRequest);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const updateRequest = async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json(error);
  }
};
