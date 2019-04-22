import * as React from "react";
import MFCD from "../Components/MFCD";

export default class Deliverables extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <MFCD />
                <div>
                    <div className="user-stories-main-header">
                        Geek out with us and check out our flow
                    </div>
                    <div className="flow-header">
                        In an ideal world
                    </div>
                    <img className="problem-page-flow-image" src="images/problemIdeal.jpg" />
                    <div className="flow-header">
                        What actually happens
                    </div>
                    <img className="problem-page-flow-image" src="images/problemReality.jpg" />
                </div>
                <div>
                    <div className="wbs-main-header">
                        UI
                    </div>
                    <img src="images/UIWBS.png" alt="WBS" className="mockup-image-3" />
                </div>
                <div>
                    <div className="wbs-main-header">
                        Testing
                    </div>
                    <img src="images/testing.png" alt="WBS" className="mockup-image-4" />
                </div>
                <div>
                    <div className="wbs-main-header">
                        Database
                    </div>
                    <img src="images/database.png" alt="WBS" className="mockup-image-5" />
                </div>
            </div>
        );
    }
}

