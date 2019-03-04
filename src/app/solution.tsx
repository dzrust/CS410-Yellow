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
        <h1>
            Solution Statement
        </h1>
        <p>
            Skadoosh will allow users the ability to locate,
            provide feedback, and to safely use public restrooms
            within your surrounding area.
        </p>
        <h2>
            Solution Charateristics:
        </h2>
        <ul>
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
        <MFCD />
    </div>
);

export default Solution;