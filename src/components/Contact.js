import React, {useEffect, useState} from 'react';
import "../css/contact.css";
import {base_url, period_month} from "../utils/constants";

const Contact =()=>{
    const [planets,setPlanets] = useState(['wait...']);

    const fillPlanets = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        const planets = json.map(item => item.name);
        setPlanets(planets);
        const info = {
            payload: planets,
            time: Date.now()
        }
        sessionStorage.setItem('planets',JSON.stringify(info));
    }

    useEffect(()=>{
        const storedPlanets = JSON.parse(sessionStorage.getItem('planets'));
        if(storedPlanets && (Date.now()-storedPlanets.time) < period_month){
            setPlanets(storedPlanets.payload);
        }
        else {
            fillPlanets(`${base_url}/v1/planets`);
        }
        return ()=> {
        }
    }, [])


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.."/>
                </label>
                <label>Planet
                    <select name="planet">{
                        planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                </label>
                <label>Subject
                    <textarea name="subject" placeholder="Write something.."/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact