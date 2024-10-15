const { User } = require('../models');

module.exports.createOrFindUser = async (req, res, next) => {
  try {
    const { body } = req;
    const [oldUser] = await User.find({ email: body.email });
    if (oldUser) {
      return res.status(200).send({ data: oldUser });
    }
    const newUser = await User.create(body);
    if (!newUser) {
      return next(new Error('bad request'));
    }
    res.status(201).send({ data: newUser });
  } catch (error) {
    next(error);
  }
};
