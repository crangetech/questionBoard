import '../App.css';
import Header from '../components/Header-comp.js'

import Signin from '../components/Signin-comp.js'
import Footer from '../components/Footer-comp.js'


function SigninPage() {
    return(
        <div className="">
            <div>
            <Header />
            <Signin/>
            <Footer />
            </div>
        </div>
    );
}
export default SigninPage;

