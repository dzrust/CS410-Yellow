import * as React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import Problem from './problem';
import Solution from './solution';
import Team from './team';
import Presentation from './presentation';
import References from './references';
import Footer from "./footer";
import Deliverables from "./deliverables";

const HeadingRouter = ({}) => {
    let headerWords = 'Old Dominion University';
    let subHeaderWords = ' Spring \'19';
    if (window.innerWidth <= 1000) {
        headerWords = 'ODU';
        subHeaderWords = '';
    }
    return (
        <Router basename="/">
            <div className="page">
                <div id="header" className="header">
                    <Link to="/" className="header-logo">
                        <strong>
                            {headerWords}
                        </strong>
                        <span>
                            {subHeaderWords}
                    </span>
                    </Link>
                    <Link to="/" className="header-link">Home</Link>
                    <Link to="/problem" className="header-link">Problem</Link>
                    <Link to="/solution" className="header-link">Solution</Link>
                    <Link to="/team" className="header-link">Team</Link>
                    <Link to="/presentations" className="header-link">Presentations</Link>
                    <Link to="/references" className="header-link">References</Link>
                    <Link to="/deliverables" className="header-link">Deliverables</Link>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/problem" component={Problem} />
                    <Route path="/solution" component={Solution} />
                    <Route path="/team" component={Team} />
                    <Route path="/presentations" component={Presentation} />
                    <Route path="/references" component={References} />
                    <Route path="/deliverables" component={Deliverables} />
                </div>
                <Footer />
            </div>
        </Router>
    )
};
///test///
export default HeadingRouter;