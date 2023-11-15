import React, {Component} from 'react';
import {starWarsInfo} from "../utils/constants";
import style from "../css/farGalaxy.module.css";

class StarWars extends Component{

    render() {
        return (
                <div className={style.farGalaxy}>
                    <p>{starWarsInfo}</p>
                </div>
            );
    }
}

export default StarWars;