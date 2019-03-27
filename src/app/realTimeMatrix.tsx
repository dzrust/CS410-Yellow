import * as React from "react";
import YesSVG from "./yesSVG";
import NoSVG from "./noSVG";

const matrixHeaders = [
    'Features', 'Skadoosh', 'SitorSquat', 'Toilet Finder', 'Flush', 'Where to Wee', 'Bathroom Scout'
];
const matrix = [
    ['Real-Time Feedback', true, false, false, false, false, false],
    ['Real-Time Rating', true, false, false, false, false, false],
    ['Real-Time Waiting', true, false, false, false, false, false],
];

const RealTimeMatrix = () => (
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

export default RealTimeMatrix;