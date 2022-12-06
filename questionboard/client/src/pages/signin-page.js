import '../App.css';
import Header from '../components/Header-comp.js'
import Nav from '../components/Nav-comp.js'
import Signin from '../components/Signin-comp.js'
import Footer from '../components/Footer-comp.js'


function SigninPage() {
    return(
        <div className="">
            <div>
            <Header />
            <Nav />
            <Signin/>
            <Footer />
            </div>
        </div>
    );
}
export default SigninPage;

