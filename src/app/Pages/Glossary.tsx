import * as React from "react";


const GLOSSARY_ENTRIES = [

    'Skadoosh It - #1 Toilet Finder ',
    'API - Application Programming Interface',
    'UI - User Interface',
    'WBS - Work Breakdown Structure',
    'MFCD - Major Functional Component Diagram',
    'Amenities - A wanted or practical feature to a facility',
    'OS - Operating System ',
    'GIS - Geographic  Information Systems',

]

export default class Glossary extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className="user-stories">
                    <h1>
                        Glossary
                    </h1>
                    <ul>
                        {
                            GLOSSARY_ENTRIES.map(entries => (
                                <li>{entries}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
