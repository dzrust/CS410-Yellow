import * as React from "react";


const NON_OWNER_STORIES_NEEDS = [
    'Login',
    'Create/View my profile',
    'Receive notifications',
    'Find restrooms based on preset preferences',
    'Leave a rating',
]

const NON_OWNER_STORIES_WISH = [
    'Set my gender',
    'Set my username/info',
    'Create a list of preferences based on: ',
    '   -Cleanliness  ',
    '   -Amenities',
    '   -Gender nuetrality',
    '   -Baby-changing stations',
    'Edit my preferences',
    'Find restroom based on my preferences',
    'Have multiple preference profiles',
    'Have the option for default preferences and find closest restroom (Urgent)',
    'Add unverified restroom to the map ',
    'View unverified restrooms created by other users (at their own risk)',
    'Only view Skadoosh approved owner operated restrooms',
    'View pictures of a restroom',
    'See pictures of restrooms',
    'Add pictures of a restroom',
    'See what type of amenities a bathroom contains',  
]

const OWNER_STORIES_NEEDS = [
    
    'Add my restroom to the map',
    'Display information about my bathroom:',
    '   -Hours of operation',
    '   -Amenities',
    'Update my restroom profile',
    'Comment/respond to reviews/feedback',
    'Receive notification if my restroom gets a bad review',

]

const OWNER_STORIES_WISH = [
    'Get my business Skadoosh verified',
    'Receive data analytics ',
    'Filter data to assist with creating a janitor schedule',
    'Set notifications for ratings under a certain score',
    'Filter data to view peak hours',
    'Advertise my business',
]

const TESTER_STORIES_NEED = [
    'Be able to create a new accounts',
    'Be able to post a review and see it',
    'Be able to receive notifications',
    'Restroom should sort when using the preset preferences',
    'Be able to see my location on the map',
    'Be able to create a new business',
    'Be able to see the new business in the map',

]

const PrototypeUserStories = () => (
    <div>
        <div className="user-stories-main-header">
            Prototype User Stories
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
            Tester
        </div>
        <div className="user-stories-sub-header">
            As a Tester I need to:
        </div>
        <div className="user-stories">
            <ul>
                {
                    TESTER_STORIES_NEED.map(stories => (
                        <li>{stories}</li>
                    ))
                }
            </ul>
        </div>
    </div>
);

export default PrototypeUserStories;