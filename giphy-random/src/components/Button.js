import React from 'react';

const Button = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        props.randomgif();
    };

    return (
        <div>
            <button onClick={handleClick}>
                Random Gif
            </button>

        </div>
    );
};
export default Button;