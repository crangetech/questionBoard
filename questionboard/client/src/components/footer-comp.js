import { Link } from "react-router-dom";
function FooterComp() {
    // const endpoint =
    // process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    return (

        <footer className="w3-padding w3-display-bottommiddle" id={"footer"} >
            <div id="page-container">
                <div id={"content-wrap"}>
                    
                        <ul className="">
                            <li><Link to="/terms">Terms and Condition</Link></li>
                            <li><Link to="/privacy">Privacy</Link></li>
                            <li><Link to="/support">Support</Link></li>
                        </ul>
                    
                </div>
            </div>
        </footer>

    )
}
export default FooterComp