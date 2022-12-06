const { gql } = require("apollo-server-express");
const typeDefs = gql`

type User{
    _id: ID
    username: String
    email: String
}

type Answer{
    answerId: ID
    questionId: Number
    answerText: String
    createdAt: Date
    usernameId: Number
    upvotes: Number
}


type Question{
    questionId: ID
    questionText: String
    createdAt:Date
    usernameId: Number
    answers:[Answer] 
}
type Auth{
    token: ID!
    user: User
}
type Query{
    getQuestion(questionId: Number): Question
    getAnswer(answerId: Number): Answer
 }
type Mutation{
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    postAnswer(answerId: Number,questionId: Number,answerText:String,createdAt:Date,usernameId: Number,upvotes:Number): Answer
    addUpvote(answerId: Number,upvotes: Number) : Answer
    postQuestion:(questionId: Number,questionText: String,,createdAt:Date,usernameId: Number,answers:[Answers]): Question
}

`

module.exports = typeDefs;