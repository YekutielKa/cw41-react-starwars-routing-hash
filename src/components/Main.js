import React from 'react';
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Home from "./Home";
import {navNames} from "../utils/constants";

const Main = ({currentPage}) => {

    switch (currentPage){
        case navNames[1].route:
            return <AboutMe/>
        case navNames[2].route:
            return <StarWars/>
        case navNames[3].route:
            return <Contact/>
        default:
            return <Home/>
    }
};

export default Main;