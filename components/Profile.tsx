import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengesContext);
    return (
        <div className={ styles.profileContainer}>
            <img src= "https://avatars.githubusercontent.com/u/71677947?s=460&u=79db3b2ca55f9f34564ee7b6b26c12fefc6640b1&v=4"alt="Iranildo"/>
            <div>     
                    
                <strong>Iranildo</strong>
                
                <p> 
                    Level {level}
                </p>
            </div>
        </div>
    );
}
