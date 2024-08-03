import connectDB from "../../middleware/mongoose";
import UserModel from "../../models/User";

const handler = async (req,res)=> {
    if(req.method == 'POST'){
        let u = new UserModel(req.body);
        await u.save();
        res.status(200).json({success : "Success" , user: u})
    }
    else{
    res.status(400).json({error : "Bad request"})
        
    }

}
export default connectDB(handler);