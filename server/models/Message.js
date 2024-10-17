const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[A-Za-z0-9\s\\.!?-]{3,}$/.test(value),
      message: (props) => `${props.value} is not a valid content!`,
    },
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
},{
  timestamps: true,
  versionKey: false
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
