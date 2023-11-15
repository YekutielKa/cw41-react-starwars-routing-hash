import React, {Component} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

class Home extends Component{
    render() {
        return (
            <main className="clearfix">
                <Hero/>
                <DreamTeam/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Home;