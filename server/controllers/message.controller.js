const { Message } = require('../models');

module.exports.getMessages = async (req, res, next) => {
  try {
    //const {query} = req;
    const messages = await Message.find().populate({
      path: 'userId',
      select: 'login',
    });
    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
};
