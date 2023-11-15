import React, {Component} from 'react';
import {friends} from "../utils/constants";
import Friend from "./Friend";

class DreamTeam extends Component{
    componentWillUnmount() {
    }
    componentDidMount() {
    }
    render() {
        return (
            <section className="float-end w-50 row border mx-1 mt-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                {friends.map((photo,index)=> <Friend key={index} photo={photo} number={index+1}/>)}
            </section>
        );
    }
}

export default DreamTeam;