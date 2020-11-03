/** @jsx jsx */
import React, {useState} from "react";
import {css,jsx} from '@emotion/core';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import getImageData from '../imageData';
import { propTypes } from "react-bootstrap/esm/Image";

const Slider = ({}) => {
    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    let images = getImageData();
    console.log('============');
    console.log(images);
    const {translate, transition, activeIndex} = state;

    const nextSlide=()=>{
        if(activeIndex === images.length - 1){
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide=()=>{
        if(activeIndex === 0){
            return setState({
                ...state,
                translate: (images.length - 1) * getWidth(),
                activeIndex: images.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }

    return (
        <div css={SliderCSS}>
            <SliderContent 
                translate={translate}
                transition={transition}
                width={getWidth() * images.length}>
                    {images.map(slide => (
                        <Slide 
                            key={slide}
                            content ={slide}>
                        </Slide>
                        ))}
            </SliderContent>
            <Arrow direction='left' handleClick={prevSlide}/>
            <Arrow direction='right'handleClick={nextSlide}/>
            <Dots images={images} activeIndex={activeIndex}/>
        </div>
    );
  };

 
const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider;
