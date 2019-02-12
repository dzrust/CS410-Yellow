import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import Problem from './problem';
import Solution from './solution';
import Team from './team';
import Presentation from './presentation';
import References from './references';

const HeadingRouter = () => (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <Link className="navbar-brand" to="/"><strong>Old Dominion University</strong> Spring 19'</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/problem">Problem</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/solution">Soution</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/presentations">Presentations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/references">References</Link>
                        </li>
                    </ul>
                </div>
            </nav>
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