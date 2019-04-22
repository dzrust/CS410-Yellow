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

    <div className="risks-page">
        <h1>Risks</h1>
        <img src="images/risk-matrix.jpg" alt="WBS" className="mockup-image-2" />
        <div>
            mitigation strats
                <br />
            <ul>
                <li>t-2 Mitigation strategy: Consult AWS to ensure the application scales with the growth of users.</li>
                <li>t-1 : Mitigation Strategy: Continual testing to make sure updates are not breaking app function. Usually beta programs or developer accounts are available to help app developers prepare for OS releases.</li>
                <li>c-1 Mitigation strategy: Push notifications to remind users to leave feedback. User voting strategy on images and reviews. Users can not up-vote their own images or reviews.</li>
                <li>c-2 allow users with an account to post under anonymous</li>
                <li>c-3 allow user to report directions are inaccurate</li>
            </ul>
            <br />
            L-1 im not sure what its saying
            but if it is saying that unowned restrooms are doing better than theirs id say this is wear we sell them adds or offer some benifit that may make reviews better.
            and yes the risks are in the google drive
            These are how we combat each risk
            <br />
            Technical Risks
            <ul>
                <li>T-1: The device OS is updated and breaks app function</li>
                <li>T-2: The server is unable to handle the API usage as the user base grows, performance degrades</li>
            </ul>
            <br />
            Customer Risks
            <ul>
                <li>C-1: User mis-use. Users upload fake images. Users don’t leave any feedback. Users leave malicious feedback.</li>
                <li>C-2: Users may be reluctant to provide feedback because of the subject matter</li>
                <li>C-3: Location details are inaccurate</li>
            </ul>
            Legal Risks
            <ul>
                <li>L-1: Non-Owner locations deter customers from using facility and owners see a marked revenu drop, they decide to take legal action against the app and these are the actual risks</li>
            </ul>
        </div>
    </div>
);

export default Risks;
