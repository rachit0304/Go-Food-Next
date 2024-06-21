import UserModel from "../../models/User";

export default async (req, res) => {
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const user = await UserModel.deleteOne({_id: id});
      if(user){
        await UserModel.deleteOne(user);
        res.status(200).json({ message: 'user deleted successfully' });

      }
      else{
        res.status(500).json({ message: 'Error deleting user', error });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  