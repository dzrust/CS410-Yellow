import * as React from "react";

const characteristicsOfTheProblem = [
    "Many unsanitary and unsafe restroom conditions",
    "Gender neutral restrooms are uncommon",
    "Lack of amenities such as: Soap, ample hand dryers, and no hand towels",
    "Quality of amenities",
];

const Problem = () => (
    <div className="problem-page">
        <h1>
            Problem Statement
        </h1>
		<p>
            Everyday we are faced with the urge to use the restroom,
            however not all restrooms meet our needs or expectations.
            Knowledge of location, amenities, sanitation, or safety are not always apparent when looking to use the restroom,
            thus deterring users away from the restroom.
            When users do not use the restroom it incurs gastric intestinal discomfort or constipation.
        </p>
        <p>
            {
                characteristicsOfTheProblem.map(problem => {
                    <div>
                        {
                            problem
                        }
                    </div>
                })
            }
        </p>	
    </div>
);

export default Problem;
