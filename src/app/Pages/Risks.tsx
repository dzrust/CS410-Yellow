import * as React from "react";

const Risks = () => (

    <div className="risks-page">
        <h1>Risks</h1>
        <img src="images/risk-matrix.jpg" alt="WBS" className="mockup-image-2" />
        <div>
            <h2>Technical Risks</h2>            
            <ul>
                <li>T-1: The device OS is updated and breaks app function</li>
                <li>T-2: The server is unable to handle the API usage as the user base grows, performance degrades</li>
            </ul>
            <h2>Customer Risks</h2>
            <ul>
                <li>C-1: User mis-use. Users upload fake images. Users don’t leave any feedback. Users leave malicious feedback.</li>
                <li>C-2: Users may be reluctant to provide feedback.</li>
                <li>C-3: Owner misrepresentation
    <br></br>-Incorrect location<br></br>
    -Incorrect picture<br></br>
    -Incorrect amenities</li>
                <li>C-4: Excessive notifications could cause users to become agitated and/or delete the app</li>
            </ul>
            <h2>Legal Risks</h2>            
            <ul>
                <li>L-1: Non-Owner locations deter customers from using facility and owners see a marked revenu drop, they decide to take legal action against the app and these are the actual risks</li>
            </ul>
            <h2>Mitigation Strats</h2>
            <ul>
                <li>T-1 : Mitigation Strategy: Continual testing to make sure updates are not breaking app function. Usually beta programs or developer accounts are available to help app developers prepare for OS releases.</li>
                <li>T-2 Mitigation strategy: Consult AWS to ensure the application scales with the growth of users.</li>
                <li>C-1 Mitigation strategy: Push notifications to remind users to leave feedback. User voting strategy on images and reviews. Users can not up-vote their own images or reviews.</li>
                <li>C-2 Allows registered users to post under anonymous</li>
                <li>C-3 Allow users to report incorrect details and delete accounts with too many reports</li>
                <li>C-4: We will implement our notification algorithm</li>
                <li>L-1: Make all users agree to a terms of service</li>
            </ul>
        </div>
    </div>
);

export default Risks;
