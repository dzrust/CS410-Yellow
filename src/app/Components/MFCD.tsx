import * as React from "react";

const Charateristics = [
    "Local storage will hold information such as: gender and bathroom preferences (Highest Rated, Most Reviews, Best Overall, etc. etc.)",
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

const PrototypeCharateristics = [
    "The UI will be represented within a web application",
    "The cloud will be emultaed using ODU VMs",
    "Within those VMs we will host 2 docker ubuntu images",
    "On one image there will be resources for a MSSQL Database",
    "On another image there will be resources for an API using NodeJS and ExpressJS",
    "The API on the docker image will talk to the MSSQL Database, Firebase, and Google APIs"
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
        <div className="wbs-main-header">
            MFCD (Prototype)
        </div>
        <div>
            <img src="images/MFCD-prototype.png" alt="MFCD prototype chart" className="MFCD-image" />
        </div>
        <div>
            <ul className="user-stories">
            {
                PrototypeCharateristics.map(MFCD => (
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