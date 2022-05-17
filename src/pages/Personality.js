
// personality page

// module imports
import React, { useEffect } from "react";

// code imports
//

function Personality(props){

    useEffect(() =>{
        if(props.click){
            window.scrollTo(0, props.scrollOffset);
        }
    },[]);


    return (
        <div className="page">
            {/* // academic | person | guy | individial | achiever */}
            <h1>more than just a face ...</h1>
            <h3>Hierdie sal wees 'n baie persoonlike en custom page wat wys wie jy is en hoe jy is, ook jou soft skills en hobbies</h3>
        </div>
    );

}

export default Personality;