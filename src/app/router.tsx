import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import Problem from './problem';
import Solution from './solution';
import Team from './team';
import Presentation from './presentation';
import References from './references';

const HeadingRouter = () => (
    <Router basename="/#/">
        <div>
            <header id="header">
                <div className="inner">
                    <Link to="/" className="logo"><strong>Old Dominion University</strong> Spring 19'</Link>
                    <nav id="nav">
                        <Link to="/">Home</Link>
                        <Link to="/problem">Problem</Link>
                        <Link to="/solution">Soution</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/presentations">Presentations</Link>
                        <Link to="/references">References</Link>
                    </nav>
                    <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
                </div>
            </header>
            <div className="container marketing">
                <Route exact path="/" component={Home} />
                <Route path="/problem" component={Problem} />
                <Route path="/solution" component={Solution} />
                <Route path="/team" component={Team} />
                <Route path="/presentations" component={Presentation} />
                <Route path="/references" component={References} />
            </div>
        </div>
    </Router>
);

export default HeadingRouter;