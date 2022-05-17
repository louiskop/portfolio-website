
// resume page

// module imports
import React, { useEffect } from "react";

// code imports
// 

function Resume(props) {

    useEffect(() =>{
        if(props.click){
            window.scrollTo(0, props.scrollOffset);
        }
    },[]);

    return(
        <div className="page">
            <h1>more than just a big talker ...</h1>
            <h3>Hierdie is jou volle cv met 'n link vir download</h3>
        </div>
    );   
}

export default Resume;