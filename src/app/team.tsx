import * as React from "react";

const teamMemberDataRow1 = [
    {
        name: 'Daniel Zrust',
        picture: 'images/DanielZrustPhoto.jpg',
        title: 'Engineer',
        bio: 'Drummer, video game player, father, husband, and general programming enthusiast',
    },
    {
        name: 'Brandon Feldhaus',
        picture: 'images/BrandonFeldhausPhoto.jpg',
        title: '<title>',
        bio: "Brandon Feldhaus is currently a junior at ODU and is majoring in Computer Science. He hopes to take his knowledge learned at ODU and one day create his own smart phone application. One of Brandon's biggest accomplishments in life is winning the ugly sweater contest at a 2018 christmas party, he won with the very sweater shown above.",
    },
    {
        name: 'John Edgar Monroe Quiambao',
        picture: 'images/placeholder.jpg',
        title: '<title>',
        bio: '<bio>',
    },
    {
        name: '<name>',
        picture: 'images/placeholder.jpg',
        title: '<title>',
        bio: '<bio>',
    },
    {
        name: '<name>',
        picture: 'images/placeholder.jpg',
        title: '<title>',
        bio: '<bio>',
    }
];
const teamMemberDataRow2 = [
    {
        name: '<name>',
        picture: 'images/placeholder.jpg',
        title: '<title>',
        bio: '<bio>',
    },
    {
        name: '<name>',
        picture: 'images/placeholder.jpg',
        title: '<title>',
        bio: '<bio>',
    }
];

const Team = () => (
    <div>
        <div className="row">
            {
                teamMemberDataRow1.map(teamMember => (
                    <div className="col-md-4 col-xs-12 text-center member-bio">
                        <img className="rounded-circle" src={teamMember.picture} alt="name" width="140" height="140" />
                        <h2>
                            {teamMember.name}
                        </h2>
                        <h4>
                            {teamMember.title}
                        </h4>
                        <p className="group-description">
                            {teamMember.bio}
                        </p>
                    </div>
                ))
            }
        </div>
        <div className="row">
            {
                teamMemberDataRow2.map(teamMember => (
                    <div className="col-md-4 col-xs-12 text-center member-bio">
                        <img className="rounded-circle" src={teamMember.picture} alt="name" width="140" height="140" />
                        <h2>
                            {teamMember.name}
                        </h2>
                        <h4>
                            {teamMember.title}
                        </h4>
                        <p className="group-description">
                            {teamMember.bio}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Team;