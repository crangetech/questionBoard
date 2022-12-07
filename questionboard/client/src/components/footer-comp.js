import { Link } from "react-router-dom";
function FooterComp (){
    const endpoint =
    process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    return(
      <footer class="">
            <nav class="">
                <ul>
                    <li><Link to="/terms">Terms and Condition</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </nav>
            
        </footer>

    )
}
export default FooterComp