import React from 'react'; 

import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="input-container">
            <h1>Honyst</h1>
            <form>
                <input type="text" className="user-name" placeholder="Your Info..." />
            </form>
        </div>
    );
}


export default userInput; 