import * as React from "react";
import { Link } from 'react-router-dom';
import CloseSVG from "./CloseSVG";
import BarsSVG from "./BarsSVG";

interface IHeaderState {
    isHeaderClosed: boolean;
}

export default class Header extends React.Component<any, IHeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHeaderClosed: false
        }
    }

    renderHeader = (headerClass: string): JSX.Element => (
        <div id="header" className={headerClass}>
            <div className="header-closer" onClick={() => this.setState({ isHeaderClosed: true })}>
                <CloseSVG />
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
                <div className="header-link-sub-container">
                    <Link to="/wbs" className="header-sub-link">WBS</Link>
                    <Link to="/algorithms" className="header-sub-link">Algorithms</Link>
                    <Link to="/ui" className="header-sub-link">UI</Link>
                    <Link to="/database" className="header-sub-link">Database</Link>
                    <Link to="/testing" className="header-sub-link">Testing</Link>
                    <Link to="/userStories" className="header-sub-link">User Stories</Link>
                    <Link to="/risks" className="header-sub-link">Risks</Link>
                    <Link to="/flows" className="header-sub-link">Flows</Link>
                </div>

            </div>
            <div className="header-link-container">
                <Link to="/labs" className="header-link">Labs</Link>
            </div>
            <div className="header-link-container">
                <Link to="/references" className="header-link">References</Link>
            </div>
            <div className="header-link-container">
                <Link to="/glossary" className="header-link">Glossary</Link>
            </div>
        </div>
    );

    renderHeaderOpener = (headerOpenerClass: string): JSX.Element => (
        <div className={headerOpenerClass} onClick={() => { this.setState({ isHeaderClosed: false }) }}>
            <BarsSVG />
        </div>
    )

    render() {
        const { isHeaderClosed } = this.state;
        const headerClass = isHeaderClosed ? "header hidden" : "header";
        const headerOpenerClass = !isHeaderClosed ? "header-opener hidden" : "header-opener";
        return (
            <div>
                {this.renderHeaderOpener(headerOpenerClass)}
                {this.renderHeader(headerClass)}
            </div>
        )
    }
}

