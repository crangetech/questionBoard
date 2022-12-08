function DashboardComp() {
    return (
        <main>
        <div className="containers w3-display-left">
            <div className="row">
                <div className="col-md-12">
                <h2 >
                    Welcome to your Question Dashboard!
                </h2>
                <p className="">
                    Have a question? Ask the community.
                </p>
                <form id>
                    <label htmlFor="title">What is your Question?</label>
                    <input type="text" name id className /><br />
                    <button>Post Question</button><br /><br />
                </form>
                
                    <div className>
                <h3 className>
                    Previously asked questions:
                </h3>
                {/* Table of previous questions can go here */}
                    </div>
                </div>
            </div>
        </div>
        </main>


    )
}
export default DashboardComp
