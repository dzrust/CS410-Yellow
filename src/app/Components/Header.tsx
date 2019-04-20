import * as React from "react";
import {  Link } from 'react-router-dom';

const Header = () => (
    <div id="header" className="header">
        <div className="header-closer">

        </div>
        <div className="header-link-container">
            <Link to="/" className="header-logo">
                <div>
                    ODU
                            </div>
                <div>
                    Spring &apos;19
                            </div>
            </Link>
        </div>
        <div className="header-link-container">
            <Link to="/" className="header-link">Home</Link>
        </div>
        <div className="header-link-container">
            <Link to="/problem" className="header-link">Problem</Link>
        </div>
        <div className="header-link-container">
            <Link to="/solution" className="header-link">Solution</Link>
        </div>
        <div className="header-link-container">
            <Link to="/team" className="header-link">Team</Link>
        </div>
        <div className="header-link-container">
            <Link to="/presentations" className="header-link">Presentations</Link>
        </div>
        <div className="header-link-container">
            <Link to="/deliverables" className="header-link">Deliverables</Link>
        </div>
        <div className="header-link-container">
            <Link to="/references" className="header-link">References</Link>
        </div>
        <div className="header-link-container">
            <Link to="/risks" className="header-link">Risks</Link>
        </div>
        <div className="header-link-container">
            <Link to="/glossary" className="header-link">Glossary</Link>
        </div>
    </div>
)

export default Header;
