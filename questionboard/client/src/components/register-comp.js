function RegisterComp() {
    return (
        <div classname="reg">
            <center>
                <h1> <header>Online Journal Login</header></h1>
                <form id="login_form">
                    <label className="login-forms">Username</label> <br /><input className="input" type="text" name="username" id="username" /><br />
                    <label className="login-forms">Password</label><br />  <input className="input" type="password" name="password" id="password" /><br /><br />
                    <button className="button-html">Login</button><br /><br />
                    <a href="./forgot-password.html">Forgot Password?</a>
                </form>
            </center>
        </div>
    )
}

export default RegisterComp