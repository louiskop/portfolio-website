
// main component to manage content

// module imports
import React, { useState, useEffect, useCallback }from 'react';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';

// code imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Personality from './pages/Personality';

function Main() {

    let [scrollOffset, setScrollOffset] = useState(0);
    let [click, setClick] = useState(false);

    // create navigate hook
    const navigate = useNavigate();

    // set scroll scale
    const scrollScale = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // update pages based on scroll
    useEffect(() => {

        // create onScroll function
        const onScroll = () => setScrollOffset(window.scrollY);

        // create scroll listener
        window.addEventListener('scroll', onScroll, { passive: true });

        let currentPageArr = window.location.href.split('/');
        let currentPage = currentPageArr[currentPageArr.length - 1];

        try{
        // update page based on scroll position
        if(scrollOffset >= scrollScale * 3/4){
            if(currentPage != 'personality'){
                navigate('/personality', { replace: true });
            }
        }else if(scrollOffset >= scrollScale * 2/4){
            if(currentPage != 'resume'){
                navigate('/resume', { replace: true });
            } 
        }else if(scrollOffset >= scrollScale * 1/4){
            if(currentPage != 'projects'){
                navigate('/projects', { replace: true });
            } 
        }else if(scrollOffset >= 0){
            if(currentPage != ''){
                navigate('/', { replace: true });
            }
        }
        } catch (e){
            // TODO: add a cool error popup to tell the user to slow down because their browser does not like that
            console.log("ERROR GEVANG AIA"+e);
        }

        // cleanup
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollOffset]);

    const scrollPage = useCallback(

        (pageName) => () => {
            console.log('jisis hoekom jol dit nou');

            if(pageName == "home"){
                window.scrollTo(0,0);
            }else if(pageName == "projects"){
                window.scrollTo(0, scrollScale * 1/4 + 1);
            }else if(pageName == "resume"){
                window.scrollTo(0, scrollScale * 2/4 + 1);
            }else if(pageName == "personality"){
                window.scrollTo(0, scrollScale * 3/4 + 1);
            }
        },
        [],

    );


    

    return(
        <div>
        
        {/*  navbar */}
        <div className="header">
            <p>Louis de Jager</p>
            <ul>
                <li>
                    <NavLink onClick={scrollPage("home")} to="/"  >home</NavLink>                                                                                                                                                                                                                              
                </li>
                <li>
                    <NavLink onClick={scrollPage("projects")} to="/projects" >projects</NavLink>                                                                                                                                                                                                                              
                </li>
                <li>
                    <NavLink onClick={scrollPage("resume")} to="/resume" >resume</NavLink>                                                                                                                                                                                                                              
                </li>
                <li>
                    <NavLink onClick={scrollPage("personality")} to="/personality">soft skills & hobbies</NavLink>                                                                                                                                                                                                                              
                </li>
             </ul>
        </div>

        {/*  render non static content */}
        <div className="content">
            <Routes>
            <Route path="/" element={<Home scrollOffset={0} click={click}/>}/>
            <Route path="/projects/" element={<Projects scrollOffset={scrollScale * 1/4} click={click}/>}/>
            <Route path="/resume/" element={<Resume scrollOffset={scrollScale * 2/4} click={click}/>} />
            <Route path="/personality/" element={<Personality scrollOffset={scrollScale * 3/4} click={click}/>}/>
            </Routes>
        </div>

        </div>
    );

}

export default Main;

//TODO : add prop to all pages that updates scroll pos if navbar is used