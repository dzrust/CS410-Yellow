import * as React from "react";

const Charateristics = [
    "Local storage will hold information such as: gender, age, bathroom preferences, how long before a user will pee themselves",
    "The local storage is used so that the user’s personal data does not have to be kept on our DB thus saving the user from unwanted data leakage",
    "The mobile app will serve interfaces that allow users: rate bathrooms, find bathrooms, leave reviews, owners of restrooms can see stats on their restroom, and realtime data such as: waits, ratings, and reviews",
    "Mobile app is written in React Native",
    "Cloud system are hosted in AWS",
    "AWS Features used: DynamoDB, Lambda, and Cloudfront",
    "The AWS cloud system will hold all the virtualization needed for the backend",
    "Lambda service using node.js and express.js will handle all the api calls",
    "Backend Db will be DynamoDB (no/sql) that will be accessible via AWS library",
    "Express app will have access to the GIS information given to us via Google’s maps api",
    "We will also interface with Google’s places api to get vital information such as: commercial locations, recreational locations, parks, other \"expected\" restroom locations"
];

const MFCD = ({}) => (
    <div className="MFCD">
        <div className="wbs-main-header">
            MFCD
        </div>
        <div>
            <img src="images/MFCD.png" alt="MFCD chart" className="MFCD-image" />
        </div>
        <div>
            <ul className="user-stories">
            {
                Charateristics.map(MFCD => (
                    <li>
                        {
                            MFCD
                        }
                    </li>
                ))
            }        
           </ul>
        </div>
    </div>
)

export default MFCD;