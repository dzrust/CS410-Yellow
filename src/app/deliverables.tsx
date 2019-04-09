import * as React from "react";
import MFCD from "./MFCD";

const NON_OWNER_STORIES_NEEDS = [
    'Find the closest restroom based on my preferences',
    'Set my preferences',
    'Leave a review',
    'Receive live notifications',
    'View reviews for a bathroom',
    'See a map of possible bathrooms',
    'Create an account',
    'Know when a restroom is open',
    'Change my bathroom preferences on the map',
    'Speedy ratings',
    'Know how to get directions to a bathroom',
    'Know if there’s a neutral-gender bathroom',
    'Know if there is a changing table',
    'Be able to ignore my preferences and find the closest bathroom possible',
]

const OWNER_STORIES_NEEDS = [
    'Claim my business',
    'Add a restroom',
    'Manage feedback',
    'Receive notifications', 
    'Receive feedback',
    'Create an account',
    'Comment/respond to feedback from a customer',
    'Display information about my bathroom (janitor schedule, time availability, and peak hours)',
    'Add new amenities (such as changing station)',
]

const OWNER_STORIES_WISH = [
    'Create a janitor schedule',
    'Create a time availability',
    'Know peak hours',
    'Advertise my business',
    'Receive data analytics',
]

const NON_OWNER_STORIES_WISH = [
    'Set my gender',
    'Add restrooms to my map',
    'Sort restrooms based on ratings',
    'Only see owner operated restrooms',
    'See non-verified bathrooms',
    'See pictures of restrooms',
    'Add pictures of a bathroom',
    'See what type of amenities a bathroom contains',
]

const ADMIN_STORIES_NEED = [
    'Verify a business owner account',
    'Verify an unverified restroom',
    'Delete unverifiable restrooms',
]

const ADMIN_STORIES_WISH = [
    'Empty ATM',
    'Fill Here',
]

export default class Deliverables extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <MFCD />
                <div>
                    <div className="user-stories-main-header">
                        Geek out with us and check out our flow
                    </div>
                    <div className="flow-header"> 
                        In an ideal world 
                    </div>
                    <img className="problem-page-flow-image" src="images/problemIdeal.jpg" />
                    <div className="flow-header"> 
                        What actually happens
                    </div> 
					<img className="problem-page-flow-image" src="images/problemReality.jpg" />
                
                </div>
                    <div className="user-stories-main-header">
                        User Stories
                    </div>
                    <div className="user-stories-header">
                        Non-Owner
                    </div>
                    <div className="user-stories-sub-header">
                        As a non-owner I need to:
                    </div>
                    <div className="user-stories">
                        <ul>
                            {
                               NON_OWNER_STORIES_NEEDS.map(stories => (
                                  <li>{stories}</li>
                               ))
                           }
                       </ul>
                    </div>
                    <div className="user-stories-sub-header">
                        As a non-owner I wish to:
                    </div>
                    <div className="user-stories">
                        <ul>
                        {
                            NON_OWNER_STORIES_WISH.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="user-stories-header">
                        Owner
                    </div>
                    <div className="user-stories-sub-header">
                        As an owner I need to:
                    </div>
                    <div className="user-stories">
                        <ul>
                        {
                            OWNER_STORIES_NEEDS.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="user-stories-sub-header">
                        As an owner I wish to:
                    </div>
                    <div className="user-stories">
                        <ul>
                        {
                            OWNER_STORIES_WISH.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="user-stories-header">
                        Administrator
                    </div>
                    <div className="user-stories-sub-header">
                        As an Administrator I need to:
                    </div>
                    <div className="user-stories">
                        <ul>
                        {
                            ADMIN_STORIES_NEED.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="user-stories-sub-header">
                        As an Administrator I wish to:
                    </div>
                    <div className="user-stories">
                        <ul>
                        {
                            ADMIN_STORIES_WISH.map(stories => (
                                <li>{stories}</li>
                            ))
                        }
                        </ul>
                    </div>
                <div>
                    <div className="wbs-main-header">
                        WBS
                    </div>
                    <img src="images/WBS.png" alt="WBS" className="mockup-image-2"/>
                </div>

                <div>
                    <div className="wbs-main-header">
                    UI
                    </div>
                    <img src="images/UI.png" alt="WBS" className="mockup-image-3"/>
                </div>
            </div>
        );
    }
}

