import * as React from "react";
import YesSVG from "./YesSVG";
import NoSVG from "./NoSVG";

const matrixHeaders = [
    'Features', 'Skadoosh', 'SitorSquat', 'Toilet Finder', 'Flush', 'Where to Wee', 'Bathroom Scout'
];
const matrix = [
    ['iOS',             true, true, true, true, false, true],
    ['Android',         true, true, true, true, true, true],
    ['Rating',          true, true, true, false, true, true],
    ['Directions',      true, true, false, true, true, true],
    ['Filter',          true, true, false, false, false, false],
    ['Accessibility',   true, true, true, true, false, true],
    ['Safe',            true, false, false, false, false, false],
    ['Amenities',       true, false, false, true, true, false],
    ['Free',            true, true, true, true, true, false]
];

const CompetitionMatrix = () => (
    <table className="competition-matrix">
        <tr className="competition-matrix-header">
            {
                matrixHeaders.map(header => (
                    <th>
                        {header}
                    </th>
                ))
            }
        </tr>
        {
            matrix.map(row => (
                <tr className="competition-matrix-row">
                    {
                        row.map(column => (
                            <td>
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
                            </td>
                        ))
                    }
                </tr>
            ))
        }
    </table>
);

export default CompetitionMatrix;