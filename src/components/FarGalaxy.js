import React from 'react';
import style from '../css/farGalaxy.module.css';
import {starWarsFarGalaxyInfo} from "../utils/constants";

const FarGalaxy = () => {
    return (
        <p className={style.farGalaxy}>{starWarsFarGalaxyInfo}</p>
    );
};

export default FarGalaxy;