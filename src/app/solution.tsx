import * as React from "react";
import MFCD from "./MFCD";
import Slider from "react-slick";

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

const mockupImages = [
    'images/mockup-account.png',
    'images/mockup-map.png',
    'images/mockup-notification.png',
    'images/mockup-review.png',
]

const Solution = () => (
    <div>
        <div className="Solution-statement">
            Skadoosh will provide users with the ability to locate
            and contribute real-time feedback that will notify owners
             of their restroom conditions.
            <div className="h2">
                Solution Charateristics:
            <img className="solution-image" src="images/solutions.jpg" />
            </div>
            <ul className="solution-page-characteristics">
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
        <div>
            <div className="mockup-header">
                Screens from our app
            </div>
            <Slider autoPlay={true} lazyLoad="progressive" dots={true}>
                {
                    mockupImages.map((imageUrl) => (
                        <div>
                            <img className="mockup-image" src={imageUrl} />
                        </div>
                    ))
                }
            </Slider>
            
        </div>
    </div>
);

export default Solution;