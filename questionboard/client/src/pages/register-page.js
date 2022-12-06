import '../App.css';
import Header from '../components/Header-comp.js'
import Register from '../components/Register-comp.js'
import Footer from '../components/Footer-comp.js'


function RegisterPage() {
    return(
        <div className="register-section">
            <div>
            <Header />
            <Register />
            <Footer />
            </div>
        </div>
    );
}
export default RegisterPage;

