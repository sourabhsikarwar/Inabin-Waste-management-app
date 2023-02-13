import mongoose from "mongoose";

const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.vohmn3c.mongodb.net/hack2k23?retryWrites=true&w=majority`;
    mongoose.set('strictQuery', true);
    try{
        await mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology : true});
        console.log("Database Connected Successfully");
    }
    catch(error)
    {
        console.log("Error Connecting Database : ", error.message);
    }
}

export default Connection;