import { Link } from "react-router-dom";
function FooterComp() {
    // const endpoint =
    // process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    return (

        <footer className="w3-padding w3-display-bottommiddle main-footer" id={"footer"} >
            <div id="page-container">
                <div id={"content-wrap"}>

                    <ul className="">
                        <div className="main-footer">
                            <div className="container">
                                <div className="row">
                                    {/* {column 1} */}
                                    <div className="col">
                                        <h4> QuestionBoard </h4>
                                        <ul className="list-unstyled">
                                        <li>(916)313-4823</li>
                                        <br/>
                                        <li>Sacrament</li>
                                        <br/>
                                        <li>1st st, 95789 Sacramento</li>
                                        </ul>
                                    </div>    
                                        {/* column2 */}                                            
                                                <div className="col">
                                                    <h4>Staff</h4>
                                                    <ul className="list-unstyled">                                                    
                                                    <li>Jared </li>
                                                    <br/>
                                                    <li>Dan</li>
                                                    <br/>
                                                    <li>Christian</li>
                                                    <br/>
                                                    <li>Diego</li>
                                                    </ul>
                                                </div>
                                            {/* {column3} */}
         <div className="col">
            <p>&reg; QuestionBoard</p>
            <Link to="/terms">Terms</Link>
            <br/>
            <Link to="/privacy">privacy</Link>
         </div>

                                </div>

                            </div>

                        </div>

                    </ul>

                </div>
            </div>
        </footer>

    )
}
export default FooterComp