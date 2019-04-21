import * as React from "react";

const technicalRisks = [
    "User is on the wrong version of the app on Android (sends a notification to inform them)",
    "User cannot access the internet.",
    "The device OS is updated and breaks app function",
    "Users get a new device and have no way to copy the profile data (might be customer risk?)",
];

const customerRisks = [
    "Users upload inappropriate images",
    "Users upload fake images",
    "Users don’t leave any feedback",
    "Users leave malicious feedback",
    "Routed to the preferred bathroom, but the line is too long when they get there",
    "Users opt not to share location information",
    "Bathroom no longer exists but is showing up",
    "Owners sell or close the location and do not close owner account on Skadoosh(they will be paying for it so I'm not sure they'll forget)",
    "Users personal information is exposed in the review function",
    "Users may be reluctant to provide feedback because of the subject matter",

];

const Risks = () => (

    <div className="problem-page">
        <h1>Risks</h1>
        <div className="problem-page-section">
            <div className="problem-page-sub-header">
                Technical Risks
                    </div>
            <div>
                <ul className="user-stories">
                    {
                        technicalRisks.map(risk => (
                            <li>
                                {
                                    risk
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="problem-page-sub-header-3">
                Customer Risks
                    </div><div>
                <ul className="user-stories">
                    {
                        customerRisks.map(risk => (
                            <li>
                                {
                                    risk
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>


    </div>
);

export default Risks;
