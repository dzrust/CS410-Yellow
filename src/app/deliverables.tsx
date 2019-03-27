import * as React from "react";
import MFCD from "./MFCD";

const NON_OWNER_STORIES = [
    'As a non-owner I want to find the closest restroom based on my preferences',
    'As a non-owner I want to set my preferences',
    'As a non-owner I want to leave a review',
    'As a non-owner I want to receive live notifications',
    'As a non-owner I want to view reviews for a bathroom',
    'As a non-owner I want to see a map of possible bathrooms',
    'As a non-owner I want to create an account',
    'As a non-owner i want to set my gender',
    'As a non-owner I want to know when a restroom is open',
    'As a non-owner I want to be able to change my bathroom preferences on the map',
    'As a non-owner I want to add restrooms to my map',
    'As a non-owner I want speedy ratings',
    'As a non-owner I want to sort restrooms based on ratings ',
    'As a non-owner I want to only see owner operated restrooms',
    'As a non-owner I want to see non-verified bathrooms',
    'As a non-owner I want to see pictures of restrooms',
    'As a non-owner I want to know how to get directions to a bathroom',
    'As a non-owner I want to know if there’s a neutral-gender bathroom',
    'As a non-owner I want to know if there is a changing table',
    'As a non-owner I want to add pictures of a bathroom',
    'As a non-owner I want to be able to ignore my preferences and find the closest bathroom possible ',
    'As a non-owner I want to see what type of amenities a bathroom has',
]

const OWNER_STORIES = [
    'As an owner I want to claim my business',
    'As an owner I want to add a restroom ',
    'As an owner I want to manage feedback',
    'As an owner I want to receive notifications ',
    'As an owner I want to receive data analytics ',
    'As an owner I want to receive feedback',
    'As an owner I want my business advertised (?)',
    'As an owner I want to know peak hours',
    'As an owner I want to create an account',
    'As an owner I want to create a janitor schedule',
    'As an owner I want to create a time availability',
    'As an owner I want to comment/respond to feedback from a customer',
    'As an owner i want to display information about my bathroom (janitor schedule, time availability, and peak hours)',
    'As an owner I want to add new amenities (such as changing station)',
]

export default class Deliverables extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="deliverables-page">
                <MFCD />
                <div>
                    <h2>
                        Process Flow
                    </h2>
                </div>
                <div>
                    <h2>
                        Non-Owner User Stories
                    </h2>
                    <ul>
                        {
                            NON_OWNER_STORIES.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                    </ul>
                    <h2>
                        Owner User Stories
                    </h2>
                    <ul>
                        {
                            OWNER_STORIES.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h2>
                        WBS
                    </h2>
                    <img src="images/WBS.png" alt="WBS" className="problem-page-flow-image"/>
                </div>
            </div>
        );
    }
}

