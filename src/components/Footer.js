import React from 'react';
import style from "../css/email.module.css";

const Footer = () => {
    return (
        <footer className="row align-items-center m-0">
            <div className="btn btn-danger col-1 offset-2">
                <p className="m-0">Send me an
                    <span className={`${style.email} text-uppercase`}> email</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;