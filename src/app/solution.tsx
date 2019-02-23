import * as React from "react";

const Charateristics = [
        "A smart application that located restrooms within your area",
        "Allow users to filter restrooms with wanted needs",
        "Provide location of gender neutrality",
        "Help users avoid dirty restrooms",
        "Help with unusual long wait times (maybe in stadiums)",
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
            
    </div>
);

export default Solution;