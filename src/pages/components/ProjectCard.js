
// module imports
import { React } from 'react';
import { ImCross } from 'react-icons/im';

// code imports

function ProjectCard(props) {

    return(
        <div className="projectCard">
            <div className="topBar">
                <ImCross/>
            </div>
            <div className="contentBar">
                <h3>{props.heading}</h3>
                <img src={props.image}/>
                <p id="description">{props.description}</p>
            </div>
        </div>
    );



}

export default ProjectCard;