import '../App.css';
import Header from '../components/Header-comp.js'
import Footer from '../components/Footer-comp.js'
import Questions from '../components/Questions-comp'
import Dashboards from '../components/Dashboard-comp'

function DashboardPage() {
    return(
        <div className="">
            <div>
            <Header/>
            <Dashboards/>
            <Questions/>
            <Footer/>
            </div>
        </div>
    );
}
export default DashboardPage;
