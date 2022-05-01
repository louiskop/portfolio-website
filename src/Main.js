
// main component to manage content

// module imports
import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

// code imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Personality from './pages/Personality';


class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Header wat heeltyd dieselle bly</h1>
                <ul>
                    <li>
                        <NavLink exact to="/" >home</NavLink>                                                                                                                                                                                                                              
                    </li>
                    <li>
                        <NavLink to="/projects" >projects</NavLink>                                                                                                                                                                                                                              
                    </li>
                    <li>
                        <NavLink to="/resume" >resume</NavLink>                                                                                                                                                                                                                              
                    </li>
                    <li>
                        <NavLink to="/personality" >soft skills & hobbies</NavLink>                                                                                                                                                                                                                              
                    </li>
                </ul>

                {/* Render non static content here */}
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/personality" component={Personality}/>
                </div>
            </div>
            <script src="game/game.js"></script> 
            </HashRouter>
        );
    }

}

export default Main;