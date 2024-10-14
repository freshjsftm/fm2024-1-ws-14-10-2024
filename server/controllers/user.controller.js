const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    if (!user) {
      return next(new Error('bad request'));
    }
    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};
