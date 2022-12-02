const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User{
    _id: ID
    username: String
    email: String
}
type mutation{
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
}
type Answer{
    answerId: ID
    questionId: Number
    answerText: String
    createdAt: Date
    usernameId: Number
    upvotes: Number
}
type mutation{
postAnswer(answerId: Number,questionId: Number,answerText:String,createdAt:Date,usernameId: Number,upvotes:Number): Answer
      


addUpvote(answerId: Number,upvotes: Number) : Answer
}
type query{
   getQuestion(questionId: Number): Question

   getAnswer(answerId: Number): Answer
}
type Question{
    questionId: ID
    questionText: String
    createdAt:Date
    usernameId: Number
    answers:[Answer] 
}
type mutation{
postQuestion:(questionId: Number,questionText: String,,createdAt:Date,usernameId: Number,answers:[Answers]): Question
}
`

module.exports = typeDefs;