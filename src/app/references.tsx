import * as React from "react";

const references = [
    {
        text: "Womens Health Mag",
        link: "https://www.womenshealthmag.com/health/a19998266/pooping-at-work/",
    },
    {
        text: "The Conversation",
        link: "https://theconversation.com/why-do-public-bathrooms-make-us-so-anxious-and-why-arent-we-doing-anything-about-it-50107",
    },
    {
        text: "Enviromaster Of Washington DC",
        link: "http://www.enviromasterofwashingtondc.com/blog/dirty-public-restroom-floors-can-infect-entire-building/",
    },
    {
        text: "PR News Wire",
        link: "https://www.prnewswire.com/news-releases/americans-come-clean-on-messy-public-restrooms-in-new-survey-224213141.html",
    },
];

const References = () => (
    <div className="reference-page">
        <h1>
            References
        </h1>
        <div>
            {
                references.map((reference) => (
                    <div>
                        <a href={reference.link}>
                            {reference.text}
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
);

export default References;