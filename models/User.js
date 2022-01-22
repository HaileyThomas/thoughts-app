// import mongoose
const { Schema, model } = require('mongoose');

// create schema for User
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        'Please enter a valid email address!',
      ],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// create User model
const User = model('User', UserSchema);

// create virtual for logging friend count
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// export the User model
module.exports = User;
