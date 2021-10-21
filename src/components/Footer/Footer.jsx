import React from "react";
import './Footer.css';
import { GitHub } from "@material-ui/icons";

export function Footer() {
    return (
        <div className='footer'>
            <div className='footer__info'>
                <p>Made by Aleksander Kravtsov</p>
                <a href="https://github.com/Byrka-Byrka"><GitHub/></a>
            </div>
        </div>
    )
}