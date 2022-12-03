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