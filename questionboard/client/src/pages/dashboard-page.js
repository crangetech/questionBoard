import '.App.css';
import Header from './components/Header-comp.js'
import Footer from './components/Footer-comp.js'
import Questions from '../components/questions-comp'
import Dashboard from '../components/dashboard-comp'

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
