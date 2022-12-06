<<<<<<< HEAD
function QuestionsComp() {
    return (
        <div className="homepage-questions">
            <center>
                <h2 className="h2-head">What is Your Question?</h2>
                <p>
                    Welcome to Question Board. A growing and safe community where people can post a question with the hope that someone can help answer.
                </p><br />
                <div className="post-question">
                    <button className="signup-button" onclick="window.location.href='./login.html';">Ask a Question</button>
                </div><br />
                <div className="question-container">
                    <article className="question-post">
                        <h3 className="question-title">
                            Question: <span id="question-display">?</span>
                        </h3><br />
                        <p className="question-text">Do you know the answer?</p><br />
                        <button className="comment-button" onclick="window.location.href='./login.html';">Yes, comment!</button>
                        <button className="report-button" onclick="window.location.href='./support.html';">Report question</button>
                    </article><br />
                    <article className="question-post">
                        <h3 className="question-title">
                            Question: <span id="question-display">?</span>
                        </h3><br />
                        <p className="question-text">Do you know the answer?</p><br />
                        <button className="comment-button" onclick="window.location.href='./login.html';">Yes, comment!</button>
                        <button className="report-button" onclick="window.location.href='./support.html';">Report question</button>
                    </article><br />
                    <article className="question-post">
                        <h3 className="question-title">
                            Question: <span id="question-display">?</span>
                        </h3><br />
                        <p className="question-text">Do you know the answer?</p><br />
                        <button className="comment-button" onclick="window.location.href='./login.html';">Yes, comment!</button>
                        <button className="report-button" onclick="window.location.href='./support.html';">Report question</button>
                    </article><br /><br />
                </div></center>
        </div>


    )
}
export default QuestionsComp
=======
function Questions() {
    return (
        <div>
            <div className>
                <button>Post My Question</button>
            </div>
            <div className>
                <article className>
                    <h2 className>
                        Question 1:<span id> ?</span>
                    </h2>
                    <p className>Know the answer? Post a comment!</p>
                    <button className>comment</button>
                    <button className>share</button>
                    {/* onclick send to email?*/}<button className>report question</button>
                </article>
                <article className>
                    <h2 className>
                        Question 2:<span id> ?</span>
                    </h2>
                    <p className>Know the answer? Post a comment!</p>
                    <button className>comment</button>
                    <button className>share</button>
                    {/* onclick send to email?*/}<button className>report question</button>
                </article>
                <article className>
                    <h2 className>
                        Question 3:<span id> ?</span>
                    </h2>
                    <p className>Know the answer? Post a comment!</p>
                    <button className>comment</button>
                    <button className>share</button>
                    {/* onclick send to email?*/}<button className>report question</button>
                </article>
            </div>
        </div>

    )
}
export default Questions
>>>>>>> cfceb140dc3c1fc5fb6a182334f4c86d8afc6658
