import '.App.css';
import Header from './components/Header-comp.js'
import Nav from '../components/Nav-comp'
import Footer from './components/Footer-comp.js'
import Privacy from '../components/policy-comp'

function Privacy() {
    return(
        <div className="">
            <div>
            <Header />
            <Nav />
            <Privacy />
            <Footer />
            </div>
        </div>
    );
}
export default Privacy;

