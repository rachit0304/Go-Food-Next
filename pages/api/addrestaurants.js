import RestaurantModel from "../../models/Restaurant";
import connectDB from "../../middleware/mongoose";

const handler = async (req,res)=> {

    if(req.method == 'POST'){
        
            let p = new RestaurantModel({
                id: req.body.id,
                name: req.body.name,
                ratings: req.body.ratings,
                description: req.body.description,
                price: req.body.price,
                location: req.body.location,
                city: req.body.city,
                state: req.body.state,
                discountOffer: req.body.discount,
                image: req.body.image,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            })

            await p.save();
            res.status(200).json({success : "Success"})

        

    }
    else{
    res.status(400).json({error : "Bad request"})
        
    }

}
export default connectDB(handler);