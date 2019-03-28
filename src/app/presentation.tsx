import * as React from "react";

const Presentation = () => (

    <div>
        <div className="presentation-header">
            Feasibility V2
        </div>
        
        <div className="presentation-download">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRvEERreovjDoYaCJzjmx9s1stKMa5GFgYP37D68Gnhnid056bVoh4UriuunA3Sx1tQIKEIih_I5d8K/embed?start=true&loop=true&delayms=30000" frameBorder="0" style={{ width: '100%', height: '47rem' }} allowFullScreen={true} />

            <div className="presentation-download">
            <a href="downloadable/feasibility.pdf" download>Download Presentation</a>
            </div>
         </div>
    </div>
    
  


);
export default Presentation;
