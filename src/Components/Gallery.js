import React, {Fragment, useEffect, useState} from "react";
import Column from './Column'
const getColumns = (imgarr, col) =>{
    console.log(imgarr);
    let images = [];
    for(let i=0; i < col; i++){
        images.push([]);
    }

    let sum = 0;
    imgarr.forEach(img => {
        sum += Number(img.height);
    });

    let threshold = Math.floor(sum/col) ;
    let current = 0;
    let l = 0;
    console.log(sum);
    console.log(threshold);
    imgarr.forEach(img => {
        console.log('current:' + current);
        if(current>= threshold){
            l += 1;
            current = Number(img.height);
            console.log('going to the next column:' + l);

            images[l].push(img);

        }else{
            current += Number(img.height);
            images[l].push(img);
        }
    })
    return images;
}

const Gallery = ({imgarr, col}) => {
    let [images, setImages] = useState([]);
    useEffect(()=>{
        let mql = window.matchMedia("all and (max-width: 800px)");
        if(mql.matches){
            setImages(getColumns(imgarr, col/2));
        }else{
            setImages(getColumns(imgarr, col));
        }
    }, []);
    return (
        <Fragment>
            {images.map((img,i) => {
                return <Column key= {i} images = {img} />
            })
            }
        </Fragment>)
}

export default Gallery;