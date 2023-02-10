import Request from "../models/requestSchema.js"

// get request for all pickups 
export const getRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get a particular pickup request 
export const getRequest = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);
        res.status(200).json(request);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// post request for pickup task 
export const createRequest = async (req, res) => {
    try {
        console.log(req.body);
        const data = new Request({
            requestUser: req.body.reqUserValue,
            requestEmail: req.body.emailValue,
            contact: req.body.contactValue,
            address: req.body.userAddressValue,
            uniqueRequestID: Math.floor(Math.random() * 1000000),
            dateOfCompletion: null,
            status: 'started'
        });
        const newRequest = await data.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}