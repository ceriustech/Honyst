import React from 'react'; 

import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div className="user-output">
            <div className="card-container">
                <div className="card">
                    <h1 className="card-h1">My Info</h1>
                    <p className="card_p"></p>
                </div>
                <div className="card">
                    <h1 className="card-h1">My Info</h1>
                    <p className="card_p"></p>
                </div>
            </div>
        </div>
    );
}

export default userOutput; 