import RestaurantModel from "../../models/Restaurant";
import connectDB from "../../middleware/mongoose"

const handler = async (req,res)=> {
    if(req.method == 'POST'){
       
        let p = await RestaurantModel.findByIdAndUpdate(req.body.id , req.body);

        res.status(200).json({success : "Success"})
            
        }
    else{
    res.status(400).json({error : "Bad request"})
        
    }

}
export default connectDB(handler);