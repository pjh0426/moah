import React, {Fragement, Fragment} from "react";
import Gallery from './Gallery'
import './Gallery.css';
import getData from './data';
const GalleryPage = () => {
    let images = getData();
    return (
        <Fragment>
            <div className='gallery'>
                <Gallery imgarr={images} col={4}/>
            </div>
        </Fragment>

    );
  };

 
export default GalleryPage;
