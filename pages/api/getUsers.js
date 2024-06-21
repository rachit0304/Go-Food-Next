import connectDB from "../../middleware/mongoose"
import UserModel from "../../models/User";

const handler = async (req,res)=> {
    const users = await UserModel.find();
    res.status(200).json({users})
}
export default connectDB(handler);