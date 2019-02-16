import * as React from "react";

const teamMemberData = [
    {
        name: 'Daniel Zrust',
        picture: 'https://www.cs.odu.edu/~410yello/images/DanielZrustPhoto.jpg',
        title: 'Engineer',
        bio: `Drummer, video game player, father, husband, and general programming enthusiast. CS major in his senior year, and expected to graduate in Fall 2019. Daniel works fulltime at BombBomb as an Engineer.`,
    },
    {
        name: 'Brandon Feldhaus',
        picture: 'https://www.cs.odu.edu/~410yello/images/BrandonFeldhausPhoto.jpg',
        title: 'Mobile Developer',
        bio: "Brandon Feldhaus is currently a junior at ODU and is majoring in Computer Science. He hopes to take his knowledge learned at ODU and one day create his own smart phone application. One of Brandon's biggest accomplishments in life is winning the ugly sweater contest at a 2018 christmas party, he won with the very sweater shown above.",
    },
    {
        name: 'John Edgar Monroe Quiambao',
        picture: 'https://www.cs.odu.edu/~410yello/images/JohnQuiambao.jpg',
        title: 'Software Engineer, Professional Compiler',
        bio: 'Born in Yokosuka, Japan, John Quiambao is an ODU senior aiming for a Computer Scientist major and Computer Engineer minor. His hobbies include video games, board games, card games, computers, and making videos for others to enjoy. Proof of his passion and skills for gaming are seen above.',
<<<<<<< HEAD
    }
];
const teamMemberDataRow2 = [
=======
    },
>>>>>>> master
    {
        name: 'James Zeigler',
        picture: 'https://www.cs.odu.edu/~410yello/images/jzeigler_bio_img.jpg',
        title: 'Software Reasearch Analyst',
        bio: 'James is a Software Reasearch Analyst for Bluebeam Inc in Pasadena CA. As a professional, James has been in the Tech industry for almost 7 years, most of the time spent researching and validating bugs.  Because of his job, he has been exposed to JAVA, SQL, PostgreSQL, Salesforce, C#, Visual Studio, git, COM, .NET, Groovy, php, and others. He is an avid Magic player, and table-top gamer (D&D, or similar RPG). He grew up in the Pacific Northwest, in the Portland, OR and SW Washington. If not playing Magic or video games, he will probably be out on his Motorcycle or putting on +40 weight eating Ice Cream.',
    },
    {
        name: 'Bryan Perez',
        picture: 'https://www.cs.odu.edu/~410yello/images/BryanP_img.jpg',
        title: 'Software Developer',
        bio: 'Bryan is a senior at Old Dominion University expected to graduate in fall 2019. Curently enrolled in the linked BS/MS CS program. Serverd in the United States Army as an infantryman. ',
    },
    {
        name: 'Kevin OBrien',
        picture: 'https://www.cs.odu.edu/~410yello/images/Kevin.jpg',
        title: 'Member',
        bio: 'Computer Science Major senior year, Employed at VMASC working with AI, Enjoys fishing, video games, and relaxing.',
    }
];

const Team = () => (
    <div className="team-page">
        {
            teamMemberData.map(teamMember => (
                <div className="team-member">
                    <img
                        className="team-member-image"
                        src={teamMember.picture}
                        alt={teamMember.name} 
                    />
                    <div className="team-member-name">
                        {teamMember.name}
                    </div>
                    <div className="team-member-title">
                        {teamMember.title}
                    </div>
                    <div className="team-member-bio">
                        {teamMember.bio}
                    </div>
                </div>
            ))
        }
    </div>
);

export default Team;
