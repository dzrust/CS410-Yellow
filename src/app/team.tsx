import * as React from "react";

const teamMemberData = {
    "Daniel": {
        name: 'Daniel Zrust',
        picture: 'https://www.cs.odu.edu/~410yello/images/DanielZrustPhoto.jpg',
        title: 'Engineer',
        bio: `Drummer, video game player, father, husband, and general programming enthusiast. CS major in his senior year, and expected to graduate in Fall 2019. Daniel works fulltime at BombBomb as an Engineer.`,
    },
    "Brandon": {
        name: 'Brandon Feldhaus',
        picture: 'https://www.cs.odu.edu/~410yello/images/BrandonFeldhausPhoto.jpg',
        title: 'Mobile Developer',
        bio: "Brandon Feldhaus is currently a junior at ODU and is majoring in Computer Science. He hopes to take his knowledge learned at ODU and one day create his own smart phone application.",
    },
    "John": {
        name: 'John Edgar Monroe Quiambao',
        picture: 'https://www.cs.odu.edu/~410yello/images/JohnQuiambao.jpg',
        title: 'Software Engineer, Professional Compiler',
        bio: 'Born in Yokosuka, Japan, John Quiambao is an ODU senior aiming for a Computer Scientist major and Computer Engineer minor. His hobbies include video games, board games, card games, computers, and making videos for others to enjoy. Proof of his passion and skills for gaming are seen above.',
    },
    "James": {
        name: 'James Zeigler',
        picture: 'https://www.cs.odu.edu/~410yello/images/jzeigler_bio_img.jpg',
        title: 'Software Reasearch Analyst',
        bio: 'James is a Software Reasearch Analyst for Bluebeam Inc in Pasadena CA. As a professional, James has been in the Tech industry for almost 7 years, most of the time spent researching and validating bugs.  Because of his job, he has been exposed to JAVA, SQL, PostgreSQL, Salesforce, C#, Visual Studio, git, COM, .NET, Groovy, php, and others. He is an avid Magic player, and table-top gamer (D&D, or similar RPG). He grew up in the Pacific Northwest, in the Portland, OR and SW Washington. If not playing Magic or video games, he will probably be out on his Motorcycle or putting on +40 weight eating Ice Cream.',
    },
    "Bryan": {
        name: 'Bryan Perez',
        picture: 'https://www.cs.odu.edu/~410yello/images/Bryan_Perez.jpg',
        title: 'Software Developer',
        bio: 'Bryan is a senior at Old Dominion University expected to graduate in fall 2019. Curently enrolled in the linked BS/MS CS program. Serverd in the United States Army as an infantryman. ',
    },
    "Kevin": {
        name: 'Kevin OBrien',
        picture: 'https://www.cs.odu.edu/~410yello/images/Kevin.jpg',
        title: 'Member',
        bio: 'Computer Science Major senior year, Employed at VMASC working with AI, Enjoys fishing, video games, and relaxing.',
    }
};

const renderTopRow = () => (
    <div>
        <div className="team-member">
            <img
                className="team-member-image"
                src={teamMemberData.Daniel.picture}
                alt={teamMemberData.Daniel.name}
            />
            <div className="team-member-name">
                {teamMemberData.Daniel.name}
            </div>
            <div className="team-member-title">
                {teamMemberData.Daniel.title}
            </div>
            <div className="team-member-bio">
                {teamMemberData.Daniel.bio}
            </div>
        </div>
        <div className="team-member">
            <img
                className="team-member-image"
                src={teamMemberData.Brandon.picture}
                alt={teamMemberData.Brandon.name}
            />
            <div className="team-member-name">
                {teamMemberData.Brandon.name}
            </div>
            <div className="team-member-title">
                {teamMemberData.Brandon.title}
            </div>
            <div className="team-member-bio">
                {teamMemberData.Brandon.bio}
            </div>
        </div>
        <div className="team-member">
            <img
                className="team-member-image"
                src={teamMemberData.John.picture}
                alt={teamMemberData.John.name}
            />
            <div className="team-member-name">
                {teamMemberData.John.name}
            </div>
            <div className="team-member-title">
                {teamMemberData.John.title}
            </div>
            <div className="team-member-bio">
                {teamMemberData.John.bio}
            </div>
        </div>
        <br></br>
    </div>
    
);

const renderBottomRow = () => (
    <div>
        <div className="team-member">
            <img
                className="team-member-image"
                src={teamMemberData.James.picture}
                alt={teamMemberData.James.name}
            />
            <div className="team-member-name">
                {teamMemberData.James.name}
            </div>
            <div className="team-member-title">
                {teamMemberData.James.title}
            </div>
            <div className="team-member-bio">
                {teamMemberData.James.bio}
            </div>
        </div>
        <div className="team-member">
            <img
                className="team-member-image"
                src={teamMemberData.Bryan.picture}
                alt={teamMemberData.Bryan.name}
            />
            <div className="team-member-name">
                {teamMemberData.Bryan.name}
            </div>
            <div className="team-member-title">
                {teamMemberData.Bryan.title}
            </div>
            <div className="team-member-bio">
                {teamMemberData.Bryan.bio}
            </div>
        </div>
        <div className="team-member">
            <img
                className="team-member-image"
                src={teamMemberData.Kevin.picture}
                alt={teamMemberData.Kevin.name}
            />
            <div className="team-member-name">
                {teamMemberData.Kevin.name}
            </div>
            <div className="team-member-title">
                {teamMemberData.Kevin.title}
            </div>
            <div className="team-member-bio">
                {teamMemberData.Kevin.bio}
            </div>
        </div>
        <br></br><br></br><br></br>
    </div>
);

const Team = () => (
    <div className="team-page">
        {renderTopRow()}
        {renderBottomRow()}
    </div>
);

export default Team;
