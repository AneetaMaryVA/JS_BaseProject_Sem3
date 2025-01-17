const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      tourId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
      quantity: { type: Number, default: 1 }
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
