import '.App.css';
import Header from './components/Header-comp.js'
import Nav from '../components/Nav-comp'
import Footer from './components/Footer-comp.js'
import Donate from '../components/Donate-comp'

function Donate() {
    return(
        <div className="">
            <div>
            <Header />
            <Nav />
            <Donate />
            <Footer />
            </div>
        </div>
    );
}
export default Donate;
