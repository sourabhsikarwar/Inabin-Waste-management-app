import Collection from "../models/collectionSchema.js";
import twilio from "twilio";
import User from "../models/userSchema.js";
import Request from "../models/requestSchema.js";

const client = twilio(
  "AC7bf4c79f11aa461a41c6bacecbaab811",
  "16aaec778ca5d49db7f6c9589dbcf263"
);

export const handleCollection = async (req, res) => {
  try {
    const data = new Collection({
      userName: req.body.userName,
      reqId: req.body.reqId,
      collectorId: req.body.collectorId,
      requestUserId: req.body.requestUserId,
      collectorName: req.body.collectorName,
      collectorContact: req.body.collectorContact,
      pickupAddress: req.body.pickupAddress,
      plastic: req.body.plastic1,
      paper: req.body.paper1,
      requestId: req.body.reqId,
      organic: req.body.organic1,
      metal: req.body.metal1,
    });
    const newRequest = await data.save();
    // Update User Points
    var reqUser = await User.findById(req.body.requestUserId);
    reqUser.points = reqUser.points + 10;

    var collectUser = await User.findById(req.body.collectorId);
    collectUser.points = collectUser.points + 10;
    console.log("F")
    await reqUser.save();
    await collectUser.save();
    console.log("F")
    const updatedRequest = await Request.findByIdAndUpdate(
      req.body.reqId,
      {
        status: "completed",
        dateOfCompletion: new Date(),
      },
      { new: true }
    );
    updatedRequest.save();
    console.log("F")
    await client.messages.create({
      body: `Hi ${req.body.userName}, your request for waste pickup has been completed by ${req.body.collectorName}. Your unique request ID is ${req.body.reqId}`,
      from: "+13854620884",
      to: `+91${req.body.reqContact}`,
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getCollection = async (req, res) => {
  try {
    const data = await Collection.find({ collectorId: req.params.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionByReqId = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Collection.find({ requestId: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
