
// main component to manage content

// module imports
import React, { useState, useEffect } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

// code imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Personality from './pages/Personality';


function Main() {

    let [scrollOffset, setScrollOffset] = useState(0);

    // get amount of scroll
    useEffect(() => {

        // create onScroll function
        const onScroll = () => setScrollOffset(scrollOffset++);

        // create scroll listener
        window.addEventListener('scroll', onScroll, { passive: true });

        // cleanup
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(`Jou scroll counter = ${scrollOffset}`);


    return(
        <HashRouter>
        <div>
            <div className="header">
            <p>Louis de Jager</p>
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
            </div>
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

export default Main;

//TODO : Use paralax scroll to keep everything on the page still but scroll long white background in the background, monitor the ofset to find its direction and use the value to navigate to pages and trigger animations (does pages maintain scroll pos??)