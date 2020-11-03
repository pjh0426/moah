/** @jsx jsx */
import React from "react";
import {css,jsx} from '@emotion/core';

const Dot = ({ active }) => {
    return (
        <span
            css={css`
                padding: 10px;
                margin-right: 5px;
                cursor: pointer;
                border-radius: 50%;
                background: ${active ? 'black' : 'white'};
            `}
        />
    );
};

 
const Dots = ({ images, activeIndex }) => {
    return (
        <div
            css = {css`
                position: absolute;
                bottom: 25px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            `}
        >
            {images.map((image, i) => (
                <Dot key={image} active={activeIndex === i}/>
            ))}
        </div>
    );
};


export default Dots;
