import * as React from "react";

const MFCD = ({}) => (
    <div className="MFCD">
        <div className="MFCD-header">
            MFCD
        </div>
        <div>
            <img src="images/MFCD.png" alt="MFCD chart" className="MFCD-image" />
        </div>
        <div>
            <ul>
                <li>
                    The iOS/Android app will talk with the local storage saving various personal information to run the app that doesn’t need to be stored on the DB
                </li>
                <li>
                    The iOS/Android app will also get information from the API server
                </li>
                <li>
                    The API server will communicate with the GIS, DB, and Places API
                </li>
                <li>
                    GIS and the places API will be served by Google’s API’s
                </li>
                <li>
                    The DB will be a Postgres DB storing user information, restroom information, reviews, and location information to be provided through the API server.
                </li>
            </ul>
        </div>
    </div>
)

export default MFCD;