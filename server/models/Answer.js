const { Schema, model } = require('mongoose');


const answerSchema = new Schema(
  {
    answerId: {
        type: Number,
        default: true,
        required:true,
      },
  
    questionId: {
      type: Number,
     
      required:true,
    },

    answerText: {
      type: String,
     Required:true,
     minLength:1,
     maxLength:999,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    usernameId: {
      type: Number,
      
      required:true,
    },
    upvotes: {
      type: Number,
     
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


module.exports = answerSchema;
