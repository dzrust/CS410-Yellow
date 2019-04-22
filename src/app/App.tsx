import * as React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Problem from './Pages/Problem';
import Presentation from './Pages/Presentation';
import Footer from "./Components/Footer";
import Deliverables from "./Pages/Deliverables";
import Header from "./Components/Header";
import Solution from "./Pages/Solution";
import Team from "./Pages/Team";
import References from "./Pages/References";
import Glossary from "./Pages/Glossary";
import Risks from "./Pages/Risks";
import WBS from "./Pages/WBS";
import Algorithms from "./Pages/Algorithms";
import UserStories from "./Pages/UserStories";
import UI from "./Pages/UI";
import Database from "./Pages/Database";
import Testing from "./Pages/Testing";
import Flows from "./Pages/Flows";
import Labs from "./Pages/Labs";

const App = ({ }) => {
    return (
        <Router basename="/">
            <div className="page">
                <Header />
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/problem" component={Problem} />
                    <Route path="/solution" component={Solution} />
                    <Route path="/team" component={Team} />
                    <Route path="/presentations" component={Presentation} />
                    <Route path="/deliverables" component={Deliverables} />
                    <Route path="/wbs" component={WBS} />
                    <Route path="/algorithms" component={Algorithms} />
                    <Route path="/ui" component={UI} />
                    <Route path="/database" component={Database} />
                    <Route path="/testing" component={Testing} />
                    <Route path="/userStories" component={UserStories} />
                    <Route path="/references" component={References} />
                    <Route path="/risks" component={Risks} />
                    <Route path="/flows" component={Flows} />
                    <Route path="/labs" component={Labs} />
                    <Route path="/glossary" component={Glossary} />
                </div>
                <Footer />
            </div>
        </Router>
    )
};

export default App;
