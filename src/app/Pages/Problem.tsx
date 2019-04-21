import * as React from "react";
import CompetitionMatrix from "../Components/CompetitionMatrix";
import OwnerMatrix from "../Components/OwnerMatrix";
import RealTimeMatrix from "../Components/RealTimeMatrix";

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
            "Many unsanitary and unsafe restroom conditions",          
            "Quality of amenities",
            "Long wait times"
        ];
        this.headers = [
            'Hate finding a restroom?',
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
                    <div>
                        <h3>So do we...</h3>

                        <h2>Real-time feedback about cleanliness and amenities of 
                            restrooms available for public use is difficult to find and 
                            the ability for facility owners to use this feedback does not exist
                        </h2>

                        <div className="problem-page-sub-header-2">
                        Problems we are faced with:
                        <img className="problem-image"  src="images/Problems.jpg" />
                    </div>
                    <ul className="problem-page-characteristics">
                        {
                            this.characteristicsOfTheProblem.map(problem => (
                                <li>
                                    { problem }
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
                    <CompetitionMatrix/>
                    <div className="problem-page-sub-header-3">
                        Real-Time
                    </div>
                    <RealTimeMatrix/>
                    <div className="problem-page-sub-header-3">
                        Owner
                    </div>
                    <OwnerMatrix/>
                </div>
                  
                
            </div>
        );
    }
}

