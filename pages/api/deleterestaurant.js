import RestaurantModel from "../../models/Restaurant";

export default async (req, res) => {
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const restaurant = await RestaurantModel.deleteOne({_id: id});
      if(restaurant){
        RestaurantModel.deleteOne(restaurant);
        res.status(200).json({ message: 'Restaurant deleted successfully' });

      }
      else{
        res.status(500).json({ message: 'Error deleting restaurant', error });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  