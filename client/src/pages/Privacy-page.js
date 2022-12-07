import '../App.css';
import Header from '../components/Header-comp.js'
import Footer from '../components/Footer-comp.js'
import Privacy from '../components/Policycomp'

function PrivacyPage() {
    return(
        <div className="">
            <div>
            <Header />        
            <Privacy />
            <Footer />
            </div>
        </div>
    );
}
export default PrivacyPage;

