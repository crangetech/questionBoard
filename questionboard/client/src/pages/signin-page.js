import '.App.css';
import Header from './components/Header-comp.js'
import Register from './components/Register-comp.js'
import Footer from './components/Footer-comp.js'


function Register() {
    return(
        <div className="register">
            <div>
            <Header />
            <Signin/>
            <Footer />
            </div>
        </div>
    );
}
export default Register;

