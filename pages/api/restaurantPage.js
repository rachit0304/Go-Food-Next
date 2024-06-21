import RestaurantModel from "../../models/Restaurant";
import connectDB from "../../middleware/mongoose";

const handler =  async (req, res) => {
  const { id } = req.query;

  const details = await RestaurantModel.findById(req.query.id);

  res.status(200).json(details);
};

export default connectDB(handler);
