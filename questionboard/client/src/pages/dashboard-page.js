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
            </div>
        </div>
    );
}
export default Dashboard;
