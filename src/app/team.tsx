import * as React from "react";

const teamMemberData = {
    "Daniel": {
        name: 'Daniel Zrust',
        picture: 'images/DanielZrustPhoto.jpg',
        title: 'Mobile React Developer',
        bio: `Drummer, video game player, father, husband, and general programming enthusiast. CS major in his senior year, and expected to graduate in Fall 2019. Daniel works fulltime at BombBomb as an Engineer.`,
    },
    "Brandon": {
        name: 'Brandon Feldhaus',
        picture: 'images/BrandonFeldhausPhoto.jpg',
        title: 'Project Coordinator',
        bio: "Brandon Feldhaus is currently a junior at ODU and is majoring in Computer Science. He hopes to take his knowledge learned at ODU and one day create his own smart phone application.",
    },
    "John": {
        name: 'John Edgar Monroe Quiambao',
        picture: 'images/JohnQuiambao.jpg',
        title: 'Social Analyst',
        bio: 'Born in Yokosuka, Japan, John Quiambao is an ODU senior aiming for a Computer Scientist major and Computer Engineer minor. His hobbies include a variety of games and competition, computers, and making videos for others to enjoy. Although he was more secluded and introverted at a younger age, he has grown to be more open to what the world offers and wants to offer more back being a Computer Programmer in the future.',
    },
    "James": {
        name: 'James Zeigler',
        picture: 'images/jzeigler_bio_img.jpg',
        title: 'Web Developer',
        bio: 'James is a Software Reasearch Analyst for Bluebeam Inc in Pasadena CA. As a professional, James has been in the Tech industry for almost 7 years, most of the time spent researching and validating bugs.  Because of his job, he has been exposed to JAVA, SQL, PostgreSQL, Salesforce, C#, Visual Studio, git, COM, .NET, Groovy, php, and others. He is an avid Magic player, and table-top gamer (D&D, or similar RPG). He grew up in the Pacific Northwest, in the Portland, OR and SW Washington. If not playing Magic or video games, he will probably be out on his Motorcycle or putting on +40 weight eating Ice Cream.',
    },
    "Bryan": {
        name: 'Bryan Perez',
        picture: 'images/Bryan_Perez.jpg',
        title: 'Mobile React Developer',
        bio: 'Bryan is a senior at Old Dominion University expected to graduate in fall 2019. Curently enrolled in the linked BS/MS CS program. Serverd in the United States Army as an infantryman. ',
    },
    "Kevin": {
        name: 'Kevin OBrien',
        picture: 'images/Kevin.jpg',
        title: 'Systems Engineer',
        bio: 'Computer Science Major senior year, Employed at VMASC working with AI, Enjoys fishing, video games, and relaxing.',
    }
};

const renderTopRow = () => (
    <table className="team-member-table">
        <tr>
            <td>
                <img
                    className="team-member-image"
                    src={teamMemberData.Daniel.picture}
                    alt={teamMemberData.Daniel.name}
                />
            </td>
            <td>
                <img
                    className="team-member-image"
                    src={teamMemberData.Brandon.picture}
                    alt={teamMemberData.Brandon.name}
                />
            </td>
            <td>
                <img
                    className="team-member-image"
                    src={teamMemberData.John.picture}
                    alt={teamMemberData.John.name}
                />
            </td>
        </tr>
        <tr>
            <td className="team-member-name">
                {teamMemberData.Daniel.name}
            </td>
            <td className="team-member-name">
                {teamMemberData.Brandon.name}
            </td>
            <td className="team-member-name">
                {teamMemberData.John.name}
            </td>
        </tr>
        <tr>
            <td className="team-member-title">
                {teamMemberData.Daniel.title}
            </td>
            <td className="team-member-title">
                {teamMemberData.Brandon.title}
            </td>
            <td className="team-member-title">
                {teamMemberData.John.title}
            </td>
        </tr>
        <tr>
            <td className="team-member-bio">
                {teamMemberData.Daniel.bio}
            </td>
            <td className="team-member-bio">
                {teamMemberData.Brandon.bio}
            </td>
            <td className="team-member-bio">
                {teamMemberData.John.bio}
            </td>
        </tr>
    </table>
);

const renderBottomRow = () => (
    <table className="team-member-table">
        <tr>
            <td>
                <img
                    className="team-member-image"
                    src={teamMemberData.James.picture}
                    alt={teamMemberData.James.name}
                />
            </td>
            <td>
                <img
                    className="team-member-image"
                    src={teamMemberData.Bryan.picture}
                    alt={teamMemberData.Bryan.name}
                />
            </td>
            <td>
                <img
                    className="team-member-image"
                    src={teamMemberData.Kevin.picture}
                    alt={teamMemberData.Kevin.name}
                />
            </td>
        </tr>
        <tr>
            <td className="team-member-name">
                {teamMemberData.James.name}
            </td>
            <td className="team-member-name">
                {teamMemberData.Bryan.name}
            </td>
            <td className="team-member-name">
                {teamMemberData.Kevin.name}
            </td>
        </tr>
        <tr>
            <td className="team-member-title">
                {teamMemberData.James.title}
            </td>
            <td className="team-member-title">
                {teamMemberData.Bryan.title}
            </td>
            <td className="team-member-title">
                {teamMemberData.Kevin.title}
            </td>
        </tr>
        <tr>
            <td className="team-member-bio">
                {teamMemberData.James.bio}
            </td>
            <td className="team-member-bio">
                {teamMemberData.Bryan.bio}
            </td>
            <td className="team-member-bio">
                {teamMemberData.Kevin.bio}
            </td>
        </tr>
    </table>
);

const Team = () => (
    <div className="team-page">
        {renderTopRow()}
        {renderBottomRow()}
    </div>
);

export default Team;
