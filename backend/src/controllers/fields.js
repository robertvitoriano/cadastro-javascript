const { findByIdAndUpdate } = require("./../models/user");
const User = require("./../models/user");

module.exports = {
  async deleteField(req, res) {
    const { id } = req.params;
    const {propertiesToDelete} = req.body;
    const user = await User.findById(id);
    const propertiesToDeleteArray = propertiesToDelete.split(',');
    if (!user) {
      console.log("user not found");
      return res.send({ msg: "User not found" });

    } else {
      try {
        console.log(propertiesToDeleteArray);
        propertiesToDeleteArray.map((property)=>{
          user[property] = undefined
         
        })
        await user.save();
        return res.status(200).send(user);
      } catch (error) {
        res.send({ msg: error });
      }
    }
  },
};
