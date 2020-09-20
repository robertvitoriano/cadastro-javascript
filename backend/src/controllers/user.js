const User = require("./../models/user");

module.exports = {
  async store(req, res) {
    try {
      if (!req.body.email.includes("@") || !req.body.email.includes(".com")) {
        return res.send({ msg: "Email inválido" });
      }
      const user = await User.create(req.body);

      return res.status(201).send(user);

    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  },
  async index(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      console.log("User not found");
      return res.status(404).send({ msg: "User not found !" });
    } else {
      try {
        return res.status(200).send(user);
      } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "There was an errror" });
      }
    }
  },
};
