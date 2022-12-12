const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    id: {
        type: Number,
        default: true,
        required:true,
      },
  
    username: {
      type: String,
      minLength:1,
      maxLength:30,
      required:true,
    },

    password: {
      type: String,
     Required:true,
     minLength:1,
     maxLength:999,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      minLength:1,
      maxLength:30,
      required:true,
    },
  


  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application


// Initialize our Application model
const User = model('User', userSchema);

module.exports = User;
