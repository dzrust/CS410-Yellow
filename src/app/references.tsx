import * as React from "react";

const references = [

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
    
];

const References = () => (
    <div className="reference-page">
        <h1>
            References
        </h1>
        <ul>
            {
                references.map((reference) => (
                    <li>
                        {
                            reference.Title 
                        }
                        <br></br>
                        {
                           <a target="_blank" href={reference.Link}> {reference.Publisher} </a> 
                        }     
                    </li>
                    
                ))
            }
        </ul>
    </div>
);

export default References;