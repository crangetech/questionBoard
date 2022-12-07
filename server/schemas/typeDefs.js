const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User{
    _id: ID
    username: String
    email: String
}
type Auth{
token: ID
user: User
}
type Question{
    questionId: ID
    questionText: String
    usernameId: ID
    answers:[Answer] 
}
type Answer{
    answerId: ID
    questionId: ID
    answerText: String
    usernameId: ID
    upvotes: Int
}
type Mutation{
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    addQuestion(questionId: ID, questionText: String, usernameId: ID, answers: Int): Question
    addAnswer(answerId: ID, questionId: ID, answerText: String, usernameId: ID, upvotes: ID): Answer
    addUpvote(answerId: ID, upvotes: Int): Answer
}
type Query{
   getQuestion(questionId: ID): Question
   getAnswer(answerId: ID): Answer
   me: User
   user: User
   users: [User]
   questions: [Question]
   question: Question
}
`


module.exports = typeDefs;