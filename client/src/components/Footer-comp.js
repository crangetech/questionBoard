import { Link } from "react-router-dom";
function FooterComp() {
    // const endpoint =
    // process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    return (

        <footer className="w3-padding w3-display-bottommiddle" id={"footer"} >
            <div id="page-container">
                <div id={"content-wrap"}>

                    <ul className="">
                        <div className="main-footer">
                            <div className="container">
                                <div className="row">
                                    {/* {column 1} */}
                                    <div className="col">
                                        <h4> Open Forum </h4>
                                        <ul className="list-unstyled">
                                        <li>(916)313-4823</li>
                                        <li>Sacrament</li>
                                        <li>1st st, 95789 Sacramento</li>
                                        </ul>
                                    </div>    
                                        {/* column2 */}                                            
                                                <div className="col">
                                                    <h4>stuff</h4>
                                                    <ul className="list-unstyled">                                                    
                                                    <li>stuff</li>
                                                    <li>stuff</li>
                                                    <li>stuff</li>
                                                    </ul>
                                                </div>
                                            {/* {column3} */}
                                        

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