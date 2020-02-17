import React from 'react'; 
import './Navigation.css';


const navigation = (props) => {
    return (
        <div className="nav-container">
            <div class="sidebar">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
}

export default navigation; 