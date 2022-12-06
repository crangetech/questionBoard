function Dashboard() {
    return (
        <div>
            <div className>
                <h2 className>
                    Welcome to your Question Dashboard!
                </h2>
                <p className>
                    Have a question? Ask the community.
                </p>
                <form id>
                    <label htmlFor="title">What is your Question?</label>
                    <input type="text" name id className /><br />
                    <button>Post Question</button><br /><br />
                </form>
            </div>
            <div className>
                <h3 className>
                    Previously asked questions:
                </h3>
                {/* Table of previous questions can go here */}
            </div>
        </div>


    )
}
export default Dashboard