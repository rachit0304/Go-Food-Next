import connectDB from "../../middleware/mongoose"
import RestaurantModel from "../../models/Restaurant";

const handler = async (req,res)=> {
    const restaurants = await RestaurantModel.find();
    res.status(200).json({restaurants})
}
export default connectDB(handler);