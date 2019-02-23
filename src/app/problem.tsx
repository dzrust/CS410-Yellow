import * as React from "react";
import CompetitionMatrix from "./competitionMatrix";

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
            "Many unsanitary and unsafe restroom conditions",
            "Lack of gender neutral restrooms",
            "Lack of amenities such as: Soap, ample hand dryers, and no hand towels",
            "Quality of amenities",
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
                                    {header}
                                </div>
                            ))
                        }
                    </div>
                    <div className="problem-page-sub-header">
                        So do We...
                    </div>
                    <p className="problem-page-statement">
                        Everyday we are faced with the urge to use the restroom,
                        however not all restrooms meet our needs or expectations.
                        Knowledge of location, amenities, sanitation, or safety are not always apparent when looking to use the restroom,
                        thus deterring users away from the restroom.
                        When users do not use the restroom it incurs gastric intestinal discomfort or constipation.
                    </p>
                </div>
                <div className="problem-page-section">
                    <div className="problem-page-sub-header">
                        Problems we are faced with:
                    </div>
                    <ul className="problem-page-characteristics">
                        {
                            this.characteristicsOfTheProblem.map(problem => (
                                <li>
                                    {
                                        problem
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="problem-page-section">
                    <div className="problem-page-sub-header">
                        Checkout how we crush the competition
                    </div>
                    <CompetitionMatrix />
                </div>
                <div className="problem-page-section no-border">
                    <div className="problem-page-sub-header">
                        Geek out with us and check out our flow
                    </div>
                    <img className="problem-page-flow-image" src="https://www.cs.odu.edu/~410yello/images/flow.jpg" />
                </div>
                <div className="problem-page-section">
                    <div className="problem-page-header-container">
                        {
                            this.headers.map((header: string) => (
                                <div className={header === this.state.displayedHeader ? 'problem-page-header' : 'problem-page-header hidden'}>
                                    {header}
                                </div>
                            ))
                        }
                    </div>
                    <div className="problem-page-sub-header">
                        So do We...
                    </div>
                    <p className="problem-page-statement">
                        Everyday we are faced with the urge to use the restroom,
                        however not all restrooms meet our needs or expectations.
                        Knowledge of location, amenities, sanitation, or safety are not always apparent when looking to use the restroom,
                        thus deterring users away from the restroom.
                        When users do not use the restroom it incurs gastric intestinal discomfort or constipation.
                    </p>
                </div>
                <div className="problem-page-section">
                    <div className="problem-page-sub-header">
                        Problems we are faced with:
                    </div>
                    <ul className="problem-page-characteristics">
                        {
                            this.characteristicsOfTheProblem.map(problem => (
                                <li>
                                    {
                                        problem
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="problem-page-section no-border">
                    <div className="problem-page-sub-header">
                        Checkout how we crush the competition
                    </div>
                    <CompetitionMatrix />
                </div>
            </div>
        );
    }
}

