
// projects page

// module imports
import React, { useEffect } from "react";


// code imports
//

function Projects(props) {

    useEffect(() =>{
        if(props.click){
            window.scrollTo(0, props.scrollOffset);
        }
    },[]);

    return(
        <div className="page">
            <h1>more than just a website ...</h1>
            <h3>'n djas viewer van my projects</h3>
        </div>
    );
}

export default Projects;