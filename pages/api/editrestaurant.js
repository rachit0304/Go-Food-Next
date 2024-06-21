import RestaurantModel from "../../models/Restaurant";

export default async (req, res) => {
    if (req.method === 'POST') {
      const restaurant = await RestaurantModel.find({});
      if(restaurant){
        RestaurantModel.updateMany(restaurant);
        res.status(200).json({ message: 'Restaurant updated successfully' });

      }
      else{
        res.status(500).json({ message: 'Error updating restaurant', error });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  