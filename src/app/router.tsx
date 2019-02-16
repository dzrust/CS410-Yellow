import * as React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import Problem from './problem';
import Solution from './solution';
import Team from './team';
import Presentation from './presentation';
import References from './references';
import Footer from "./footer";

const HeadingRouter = () => (
    <Router basename="/">
        <div className="page">
            <div id="header" className="header">
                <Link to="/" className="header-logo"><strong>Old Dominion University</strong> Spring 19'</Link>
                <div id="filler" />
                <Link to="/" className="header-link">Home</Link>
                <Link to="/problem" className="header-link">Problem</Link>
                <Link to="/solution" className="header-link">Solution</Link>
                <Link to="/team" className="header-link">Team</Link>
                <Link to="/presentations" className="header-link">Presentations</Link>
                <Link to="/references" className="header-link">References</Link>
            </div>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/problem" component={Problem} />
                <Route path="/solution" component={Solution} />
                <Route path="/team" component={Team} />
                <Route path="/presentations" component={Presentation} />
                <Route path="/references" component={References} />
            </div>
            <Footer />
        </div>
    </Router>
);

export default HeadingRouter;