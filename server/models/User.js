const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /[a-z]{3,16}/.test(value),
      message: (props) => `${props.value} is not a valid login!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /[a-z]{3,16}@gmail\.com$/.test(value),
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  messages: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Message',
    },
  ],
},{
  timestamps: true,
  versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;
