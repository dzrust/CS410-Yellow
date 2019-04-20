import * as React from "react";


const GLOSSARY_ENTRIES = [

    'API - Application Programming Interface',
    'UI - User Interface',
    'WBS - Work Breakdown Structure',
    'MFCD - Major Functional Component Diagram'

]

export default class Glossary extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }


    render() {
        return(

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