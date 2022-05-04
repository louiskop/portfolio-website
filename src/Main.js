
// main component to manage content

// module imports
import React, { useState, useEffect }from 'react';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';

// code imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Personality from './pages/Personality';

function Main() {

    let [scrollOffset, setScrollOffset] = useState(0);

    // create navigate hook
    const navigate = useNavigate();

    // update pages based on scroll
    useEffect(() => {

        // create onScroll function
        const onScroll = () => setScrollOffset(window.scrollY);

        // create scroll listener
        window.addEventListener('scroll', onScroll, { passive: true });

        try{
        // update page based on scroll position
        if(scrollOffset > 3750){
            navigate('/personality', { replace: true });
        }else if(scrollOffset > 2500){
            navigate('/resume', { replace: true });
        }else if(scrollOffset > 1250){
            navigate('/projects', { replace: true });
        }else if(scrollOffset > 0){
            navigate('/', { replace: true });
        }
        } catch (e){
            // TODO: add a cool error popup to tell the user to slow down because their browser does not like that
            console.log("ERROR GEVANG AIA"+e);
        }

        // cleanup
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollOffset]);

    console.log(`Jou scroll counter = ${scrollOffset}`);

    return(
        <div>
        
        // navbar
        <div className="header">
            <p>Louis de Jager</p>
            <ul>
                <li>
                    <NavLink to="/" >home</NavLink>                                                                                                                                                                                                                              
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

        // render non static content
        <div className="content">
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/personality" element={<Personality/>}/>
            </Routes>
        </div>

        </div>
    );

}

export default Main;

//TODO : add prop to all pages that updates scroll pos if navbar is used