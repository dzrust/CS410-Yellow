import * as React from "react";
import YesSVG from "./yesSVG";
import NoSVG from "./noSVG";

const matrixHeaders = [
    'Features', 'Skadoosh', 'SitorSquat', 'Toilet Finder', 'Flush', 'Where to Wee', 'Bathroom Scout'
];
const matrix = [
    ['iOS', true, true, true, true, false, true],
    ['Android', true, true, true, true, true, true],
    ['Rating', true, true, true, false, true, true],
    ['Directions', true, true, false, true, true, true],
    ['Filter', true, true, false, false, false, false],
    ['Accessibility', true, true, true, true, false, true],
    ['Safe', true, false, false, false, false, false],
    ['Amenities', true, false, false, true, true, false],
    ['Free', true, true, true, true, true, false]
];

const determineColumnDisplay = (column:any): any => {
    
}

const CompetitionMatrix = () => (
    <div className="competition-matrix">
        <div className="competition-matrix-header">
            {
                matrixHeaders.map(header => (
                    <div>
                        {header}
                    </div>
                ))
            }
        </div>
        {
            matrix.map(row => (
                <div className="competition-matrix-row">
                    {
                        row.map(column => (
                            <div>
                                {
                                    typeof column !== 'boolean'
                                        ? (
                                            column
                                        )
                                        : (
                                            column 
                                            ? (
                                                <YesSVG />
                                            )
                                            : (
                                                <NoSVG />
                                            )
                                        )
                                }
                            </div>
                        ))
                    }
                </div>
            ))
        }
    </div>
);

export default CompetitionMatrix;