import * as React from "react";

const Charateristics = [
    "The iOS/Android app will talk with the local storage saving various personal information to run the app that doesn’t need to be stored on the DB",
    "The iOS/Android app will also get information from the API server",
    "The API server will communicate with the GIS, DB, and Places API",
    "GIS and the places API will be served by Google’s API’s",
    "The DB will be a Postgres DB storing user information, restroom information, reviews, and location information to be provided through the API server.",
];

const MFCD = ({}) => (
    <div className="MFCD">
        <div className="MFCD-header">
            MFCD
        </div>
        <div>
            <img src="images/MFCD.png" alt="MFCD chart" className="MFCD-image" />
        </div>
        <div>
            <ul className="Solution-page-characteristics">
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