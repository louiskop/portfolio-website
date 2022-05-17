
// home page

// module imports
import React, { useEffect } from "react";

// code imports
import me from '../static/me.jpg'

function Home(props) {

    useEffect(() =>{
        if(props.click){
            window.scrollTo(0, props.scrollOffset);
        }
    },[]);

    return(
        <div className="page">
            <h1>more than just a programmer ...</h1>
            <img id="me" src={me} alt="A picture of Louis de Jager"/>
            <p>i'm a mathematical and computer science student with self-taught development skills</p>
            <p>an ambitious leader with huge creative tendencies and a significant passion for learning</p>
        </div>
    );
    
}

export default Home;