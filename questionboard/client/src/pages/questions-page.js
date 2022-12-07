import '../App.css';
import Header from '../components/Header-comp.js'
import Footer from '../components/Footer-comp.js'
import Questions from '../components/Questions-comp'

function QuestionsPage() {
    return(
        <div className="">
            <div>
            <Header />            
            <Questions />
            <Footer />
            </div>
        </div>
    );
}
export default QuestionsPage;
