import '.App.css';
import Header from './components/Header-comp.js'
import Nav from '../components/Nav-comp'
import Footer from './components/Footer-comp.js'
import Questions from '../components/Questions-comp'

function Questions() {
    return(
        <div className="">
            <div>
            <Header />
            <Nav />
            <Questions />
            <Footer />
            </div>
        </div>
    );
}
export default Questions;
