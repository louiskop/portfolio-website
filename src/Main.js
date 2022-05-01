
// main component to manage content

import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Tuis from './pages/Tuis';
import Inligting from './pages/Inligting';
import Kontak from './pages/Kontak';
import Fotos from './pages/Fotos';


class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Portfolio website aia</h1>
                <ul>
                    <li>
                        <NavLink exact to="/" >Tuis</NavLink>                                                                                                                                                                                                                              
                    </li>
                    <li>
                        <NavLink to="/inligting" >Inligting</NavLink>                                                                                                                                                                                                                              
                    </li>
                    <li>
                        <NavLink to="/kontak" >Kontak Ons</NavLink>                                                                                                                                                                                                                              
                    </li>
                    <li>
                        <NavLink to="/fotos" >Fotos</NavLink>                                                                                                                                                                                                                              
                    </li>
                </ul>

                {/* Render non static content here */}
                <div className="content">
                    <Route exact path="/" component={Tuis}/>
                    <Route path="/inligting" component={Inligting}/>
                    <Route path="/kontak" component={Kontak}/>
                    <Route path="/fotos" component={Fotos}/>
                </div>

            </div>
            </HashRouter>
        );
    }

}

export default Main;