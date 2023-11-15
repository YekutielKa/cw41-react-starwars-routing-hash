import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navNames} from "./utils/constants";

const App = () => {
    const getItemByRoute = () => {
        const route = window.location.hash.split('/')[1];
        const nav = navNames.find(item => item.route === route)
        if(!nav){
            window.location.hash = `#/${navNames[0].route}`
            return  navNames[0].route
        }
        return nav.route
    }

    const getHeroByRoute = ( )=> {
        const hero = window.location.hash.split('/')[2]
        return hero ?? 'luke'
    }

    const [currentPage, setCurrentPage] = useState(getItemByRoute());

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            const page = getItemByRoute()
            setCurrentPage(page)
        })
    }, []);

    return (
        <div className="container-fluid">
            <Header/>
            <Main currentPage={currentPage}/>
            <Footer/>
        </div>
    );
}

export default App;
