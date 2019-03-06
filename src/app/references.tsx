import * as React from "react";

const references = [

<<<<<<< HEAD
    'Bradley Corporation. "Americans Come Clean on Messy Public Restrooms in New Survey." PR Newswire: News distribution, targeting and monitoring. 18 Sept. 2013. 13 Feb. 2019 <https://www.prnewswire.com/news-releases/americans-come-clean-on-messy-public-restrooms-in-new-survey-224213141.html>.',
    '"Digestive Disorders & Gastrointestinal Diseases." Cleveland Clinic. 13 Feb. 2019 <https://my.clevelandclinic.org/health/articles/7040-gastrointestinal-disorders>.',
    '"How Dirty Public Restroom Floors Can Infect Your Entire Building." Enviro-Master of Washington DC. 07 Sept. 2017. 13 Feb. 2019 <http://www.enviromasterofwashingtondc.com/blog/dirty-public-restroom-floors-can-infect-entire-building/>.',
    'Molotch, Harvey. "Why do public bathrooms make us so anxious, and why aren\'t we doing anything about it?" The Conversation. 13 Jan. 2019. The Conversation. 13 Feb. 2019 <https://theconversation.com/why-do-public-bathrooms-make-us-so-anxious-and-why-arent-we-doing-anything-about-it-50107>.',
    'Person. "This Is How Many People Refuse to Poop at Work." Women\'s Health. 25 May 2018. Women\'s Health. 13 Feb. 2019 <https://www.womenshealthmag.com/health/a19998266/pooping-at-work/>.',
    '"Stress Constipation: Causes and Treatments." Healthline. Healthline Media. 13 Feb. 2019 <https://www.healthline.com/health/stress-constipation>.',
=======
    {
        Title: 'Americans Come Clean on Messy Public Restrooms in New Survey',
        Link: 'https://www.prnewswire.com/news-releases/americans-come-clean-on-messy-public-restrooms-in-new-survey-224213141.html',
        Publisher: 'PRNews',
    },
    {
        Title: 'Digestive Disorders & Gastrointestinal Diseases',
        Link: 'https://my.clevelandclinic.org/health/articles/7040-gastrointestinal-disorders',
        Publisher: 'ClevelandClinic',
    },
    {
        Title: 'How Dirty Public Restroom Floors Can Infect Your Entire Building',
        Link: 'http://www.enviromasterofwashingtondc.com/blog/dirty-public-restroom-floors-can-infect-entire-building/',
        Publisher: 'EnviroMaster',
    },
    {
        Title: 'Why do public bathrooms make us so anxious, and why aren\'t we doing anything about it?',
        Link: 'https://theconversation.com/why-do-public-bathrooms-make-us-so-anxious-and-why-arent-we-doing-anything-about-it-50107',
        Publisher: 'TheConversation',
    },
    {
        Title: 'This Is How Many People Refuse to Poop at Work',
        Link: 'https://www.womenshealthmag.com/health/a19998266/pooping-at-work',
        Publisher: 'WomansHealthMag',
    },
    {
        Title: 'Stress Constipation: Causes and Treatments',
        Link: 'https://www.healthline.com/health/stress-constipation',
        Publisher: 'HealthLine',
    }
    
>>>>>>> master
];

const References = () => (
    <div className="reference-page">
        <h1>
            References
        </h1>
        <ul>
            {
                references.map((reference) => (
<<<<<<< HEAD
                    <div>
                        {reference}
                    </div>
=======
                    <li>
                        {
                            reference.Title 
                        }
                        <br></br>
                        {
                           <a target="_blank" href={reference.Link}> {reference.Publisher} </a> 
                        }     
                    </li>
                    
>>>>>>> master
                ))
            }
        </ul>
    </div>
);

export default References;