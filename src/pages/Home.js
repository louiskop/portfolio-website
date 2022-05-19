
// home page

// module imports
import React, { useEffect } from "react";

// code imports
import me from '../static/me.jpg'
import Button from './components/Button';

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
            {/* <p>i'm a mathematical and computer science student with self-taught development skills</p>
            <p>an ambitious leader with a passion for learning</p> */}
            <p>Minim reprehenderit qui aute mollit sint quis nulla. Ea non ullamco reprehenderit do nostrud dolor qui. Eiusmod velit mollit officia nisi enim. Nisi qui sunt enim elit et proident ipsum aute amet veniam aute. Sit ipsum pariatur amet mollit. Occaecat ex consectetur proident anim incididunt commodo nostrud veniam dolore duis aute.</p>
            
        
        </div>
    );
    
}

export default Home;