import User from "../models/userSchema.js";
import twilio from "twilio";

const client = twilio(
    "AC7bf4c79f11aa461a41c6bacecbaab811",
    "16aaec778ca5d49db7f6c9589dbcf263"
  );

// keep track of user waste_disposal and update avarege number of days between waste disposal
export const updateWasteDisposal = async (req, res) => {
  try {
    console.log("updateWasteDisposal");
    const users = await User.find();
    users.forEach(async(user) => {
        if(user.waste_disposal.length == 0 || user.user_type ==="collector")
            return;
        var sum = 0;
        for(var i = 0; i < user.waste_disposal.length - 1; i++){
            sum += user.waste_disposal[i+1] - user.waste_disposal[i];
        }
        user.average_day = sum / (user.waste_disposal.length - 1);
        user.save();
        let avg = user.days_left_notification;
        if(avg <= 0 )
        {
            await twilio.messages.create({
                body: `Hello ${user.name}, This is a reminder that you have to dispose your waste.`,
                from: "+13854620884",
                to: user.contact,
                });
                user.days_left_notification = user.average_day;
                user.save();
        }
        else{
            user.days_left_notification -= 1;
            user.save();
        }

    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
