import * as React from "react";
import MFCD from "./MFCD";

const Charateristics = [
    "Allows users to create profiles",
    "Profiles store store facility needs",
    "Locates restrooms within your area that fulfill needs",
    "Locations have attributes, profiles, and history",
    "Respects gender neutrality",
    "Identifies previously flagged dirty restrooms",
    "Identifies long wait times (maybe in stadiums)",
    "Allows owners to create accounts",
    "Provides owners real-time feedback on facilities",
    "Owners can generate analytics about locations"
];

const Solution = () => (
    <div>
        
        <div className="Solution-statement">
            Skadoosh will allow users the ability to locate,
            provide feedback, and to safely use public restrooms
            within your surrounding area.
            <div className="h2">
            Solution Charateristics:
            <img className="solution-image"  src="images/solutions.jpg" />
            </div>
            <ul className="Solution-page-characteristics">
            {
                Charateristics.map(Solution => (
                    <li>
                        {
                            Solution
                        }
                    </li>
                ))
            }
            </ul>
        </div>
        <MFCD />
        <div>
            <div className="mockup-header">
                Screens from our app
            </div>
            <img className="mockup-image" src="images/mockup.png" />
        </div>
    </div>
);

export default Solution;