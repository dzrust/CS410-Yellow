import * as React from "react";
import CompetitionMatrix from "./competitionMatrix";
import RealTimeMatrix from "./realTimeMatrix";

interface ProblemState {
    displayedHeader: string;
}

export default class Problem extends React.Component<{}, ProblemState> {
    characteristicsOfTheProblem: Array<string>;
    headers: Array<string>;
    headerChangeInterval: number
    constructor(props: any) {
        super(props);
        this.characteristicsOfTheProblem = [
            "Lack of real-time data",
            "Lack of gender neutral restrooms",
            "Lack of amenities such as: Soap, ample hand dryers, etc",
            "Quality of amenities",
            "Many unsanitary and unsafe restroom conditions",
            "Long wait times"
        ];
        this.headers = [
            'Hate finding a good restroom?',
            'Hate losing your way?',
            'Love informing others?',
        ];

        this.state = {
            displayedHeader: this.headers[0]
        }

    }

    componentDidMount() {
        this.headerChangeInterval = setInterval(this.setDisplayedHeader, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.headerChangeInterval);
    }

    setDisplayedHeader = () => {
        let currentIndex = this.headers.indexOf(this.state.displayedHeader);
        let newHeader = '';
        if ((currentIndex + 1) === this.headers.length) {
            newHeader = this.headers[0];
        } else {
            newHeader = this.headers[currentIndex + 1];
        }
        this.setState({ displayedHeader: newHeader });
    }

    render() {
        return (
            <div className="problem-page">
                <div className="problem-page-section">
                    <div className="problem-page-header-container">
                        {
                            this.headers.map((header: string) => (
                                <div className={header === this.state.displayedHeader ? 'problem-page-header' : 'problem-page-header hidden'}>
                                    { header }
                                </div>
                            ))
                        }
                    </div>
                    <div className="problem-page-sub-header">
                        So do we...
                        <br />
                        When it comes to identifying a quality restroom it can be difficult to get real-time data based upon feedback about the safety, cleanliness, and wait-time.
                    </div>
                    <p className="problem-page-statement">
                        <br></br><br></br>
                    </p>
                    <div className="clearfix">
                    <div className="problem-page-heading">
                    Problems we are faced with:
                    <img className= "image" src="images/problemCharacteristicsImage.jpg" width="300" height="300"/>
                    </div>   
                    <ul className="problem-page-characteristics">
                        {
                            this.characteristicsOfTheProblem.map(problem => (
                                <li>
                                    {problem}
                                    
                                </li>
                            ))
                        }
                    </ul> 
                                  
                </div>
                </div>
                <div className="problem-page-section">
                    <div className="problem-page-sub-header">
                        Checkout how we crush the competition
                    </div>
                    <CompetitionMatrix />
                    <div className="problem-page-sub-header">
                    Real-Time
                    </div> 
                    <RealTimeMatrix/>
                </div>
                  
                
                <div className="problem-page-section no-border">
                    <div className="problem-page-sub-header">
                        Geek out with us and check out our flow
                    </div>
                    <h2> In an ideal world </h2>
                    <img className="problem-page-flow-image" src="images/problemIdeal.png" />
                    <h2> What actually happens</h2> 
					<img className="problem-page-flow-image" src="images/problemReality.png" />
                </div>
            </div>
        );
    }
}

