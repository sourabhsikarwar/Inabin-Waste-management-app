import Collection from "../models/collectionSchema.js";

export const handleCollection = async (req, res) => {
    try {
        console.log(req.body);
        const data = new Collection({
            userName: req.body.userName,
            uniqueRequestId: req.body.uniqueRequestId,
            collectorName: req.body.collectorName,
            userEmail: req.body.userEmail,
            userContact: req.body.userContact,
            pickupAddress: req.body.pickupAddress,
            plastic: req.body.plastic,
            paper: req.body.paper,
            organic: req.body.organic,
            metal: req.body.metal,
        });
        const newRequest = await data.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}