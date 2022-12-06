<<<<<<< HEAD
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
=======
import '.App.css';
import Header from './components/Header-comp.js'
import Footer from './components/Footer-comp.js'
import Questions from '../components/Questions-comp'
import Dashboard from '../components/Dashboard-comp'

function Dashboard() {
    return(
        <div className="">
            <div>
            <Header />
            <Dashboard />
            <Questions />
            <Footer />
>>>>>>> cfceb140dc3c1fc5fb6a182334f4c86d8afc6658
            </div>
        </div>
    );
}
<<<<<<< HEAD
export default DashboardPage;
=======
export default Dashboard;
>>>>>>> cfceb140dc3c1fc5fb6a182334f4c86d8afc6658
