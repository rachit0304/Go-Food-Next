import connectDB from "../../middleware/mongoose";
import UserModel from "../../models/User";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await UserModel.findOne({ email: req.body.email });

    if (user) {
      if (
        req.body.email == user.email &&
        req.body.password == user.password && user.isAdmin
      )
      {
        res
        .status(200)
        .json({ success: "Admin", email: user.email, name: user.name });
      }
      else if(   
        req.body.email == user.email &&
        req.body.password == user.password ) {
        res
          .status(200)
          .json({ success: "user", email: user.email, name: user.name });
      } else {
        res
          .status(400)
          .json({ success: "false", error: "invalid credentials" });
      }
    } else {
      res.status(400).json({ success: "false", error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "Bad request" });
  }
};

export default connectDB(handler);
