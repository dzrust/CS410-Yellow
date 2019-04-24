import * as React from "react";

const GUEST_NEEDS = [
    'See a login/sign up page',
    'Create a non-owner and owner profile/accounts',
    'View map of restrooms closest to my location',
    'Choose a restroom',
    'View ratings and reviews',
    'See Skadoosh verified/approved bathrooms',
    'Be prompted to register when I try to leave a review',

]

const NON_OWNER_STORIES_NEEDS = [
    'Login',
    'Create/View my profile',
    'Set my username/info',
    'Receive live notifications',
    'Create a list of preferences based on:',
    '   -Cleanliness  ',
    '   -Amenities',
    '   -Gender nuetrality',
    '   -Baby-changing stations',
    'Edit my preferences',
    'Find restroom based on my preferences',
    'Leave a review',
    'Have multiple preference profiles ',
    'Have the option for default preferences and find closest restroom (Urgent)',

]

const OWNER_STORIES_NEEDS = [
    'Get my business Skadoosh verified',
    'Add my restroom to the map',
    'Comment/respond to reviews/feedback',
    'Display information about my bathroom:',
    '   -Hours of operation',
    '   -Amenities',
    'Update my restroom profile',
    'Receive notification if my restroom gets a bad review or goes under a certain rating ',

]

const OWNER_STORIES_WISH = [
    'Receive data analytics ',
    'Filter data to assist with creating a janitor schedule',
    'Filter data to view peak hours',
    'Advertise my business',
]

const NON_OWNER_STORIES_WISH = [
    'Set my gender',
    'Add unverified restroom to the map ',
    'View unverified restrooms created by other users (at their own risk)',
    'Only view Skadoosh approved owner operated restrooms',
    'View pictures of a restroom',
    'See pictures of restrooms',
    'Add pictures of a restroom',
    'See what type of amenities a bathroom contains',
    
]

const ADMIN_STORIES_NEED = [
    'Manage owner and non-owner accounts',
    'Suspend or delete accounts',
    'Verify a business for owner an account',
    'Verify an unverified restroom',
    'Prepare notifications to be sent to registered users',
    'Send users notifications',
    'Delete restroom locations',
    'Delete false reviews',
    'Delete owner feedback',
]

const ADMIN_STORIES_WISH = [
    'Upgrade owner accounts',
    'Manage advertisements for owner accounts',
    'Manage top Skadoosh rated restroom list',
]

const UserStories = () => (
    <div>
        <div className="user-stories-main-header">
            User Stories
                    </div>

        <div className="user-stories-header">
            Guest
                    </div>
        <div className="user-stories-sub-header">
            As an Guest I need to:
                    </div>
        <div className="user-stories">
            <ul>
                {
                    GUEST_NEEDS.map(stories => (
                        <li>{stories}</li>
                    ))
                }
            </ul>
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
    </div>
);

export default UserStories;