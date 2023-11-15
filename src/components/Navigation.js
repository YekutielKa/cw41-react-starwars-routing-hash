import React from 'react';
import {navNames} from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {navNames.map((name) => <NavItem changePage={changePage} key={name.route} navName={name}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;