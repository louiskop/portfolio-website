
// projects page

// module imports
import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

// code imports
import "../css/project.css";
import ProjectCard from "./components/ProjectCard";
import dummyImg from "../static/me.jpg"
import Button from "./components/Button";

// Dummy Data
let desc = "Cupidatat non duis reprehenderit magna reprehenderit id ut commodo eu. Nulla in consectetur id cillum officia esse ullamco laborum eu consectetur. Culpa duis incididunt qui non ipsum sit consectetur officia dolore sunt. Dolor incididunt mollit consequat cupidatat laborum pariatur sint qui officia. Dolore eu occaecat proident fugiat Lorem."


function Projects(props) {

    useEffect(() =>{
        if(props.click){
            window.scrollTo(0, props.scrollOffset);
        }
    },[]);

    return(
        <div className="page">
            <h1>more than just a website ...</h1>
            <div className="projectViewer">
                <Button icon={<IoIosArrowBack/>} />
                <ProjectCard heading="E-commerce store" image={dummyImg} description={desc}/>
                <Button icon={<IoIosArrowForward/>} />
            </div>
        </div>
    );
}

export default Projects;