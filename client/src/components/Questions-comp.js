function QuestionsComp() {
    return (
        <main>
            <div className=" homepage-questions containers w3-display-right">
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
                       
                    </div></center>
            </div>
        </main>

    )
}
export default QuestionsComp
