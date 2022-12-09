const { Schema, model } = require('mongoose');
const answerSchema = require('./Answer')
//const User= require('./User')
// Schema to create Post model
const questionSchema = new Schema(
  {
    questionId: {
      type: Number,
      default: true,
      required: true,
    },

    questionText: {
      type: String,
      Required: true,
      minLength: 1,
      maxLength: 999,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    _id: {
      type: Number,
      default: true,
      required: true,
    },
    answers: [answerSchema]


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
const Question = model('Question', questionSchema);

module.exports = Question;
