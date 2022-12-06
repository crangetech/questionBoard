<<<<<<< HEAD
function SupportComp() {

    return (
        <div>
            <h2>Support</h2>
            <p className="register-section">
=======
function Support() {

    return (
        <div className>
            <h2>Support</h2>
            <p className>
>>>>>>> cfceb140dc3c1fc5fb6a182334f4c86d8afc6658
                Do you have any questions? Fill out the form below.
            </p>
            <form id>
                <label className="support" htmlFor="name">Enter your full name:</label>
                <input type="text" placeholder="Full name" name="name" id="name" className="form-input" /><br />
                <label className="support" htmlFor="email">Enter your email address:</label>
                <input type="text" placeholder="Email address" name="email" id="email" className="form-input" /><br />
                <label className="support" htmlFor="phone">Enter your contact number:</label>
                <input type="text" placeholder="Phone number" name="phone" id="phone" className="form-input" /><br />
                <label className="support" htmlFor="message">Enter your message:</label>
                <textarea className="textarea" name="Message" rows={8} cols={30} defaultValue={""} />
                <br /><button className="button-html">Submit</button><br /><br />
            </form>
        </div>

    )
}
<<<<<<< HEAD
export default SupportComp
=======
export default Support
>>>>>>> cfceb140dc3c1fc5fb6a182334f4c86d8afc6658
