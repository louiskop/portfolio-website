
// module imports 
import { React } from 'react';

// code imports
import "../../css/button.css";

function Button(props){

    return(
        <div className="brutButton">
            {props.icon}
        </div>
    );

    
}

export default Button;