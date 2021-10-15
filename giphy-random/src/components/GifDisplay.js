import React from 'react';

export default function GifDisplay(props) {

    return (
        <div className='gif-image'>
            <img src={props.gif.image_url} />
        </div>
    )
};

