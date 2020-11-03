import React from "react";
import Progress from './Progress';
import './Project.css';
import img1 from '../images/Cambodia_Inclass.JPG';

const Project = (props) => {

    return (
        <div className="projectContainer">
            <div className='projectHeader'>
                <div className='mt-5'>
                    <span className='header1'>MOAH PROJECT 1.</span><span className='header2'> Support for Somrongthom School in Cambodia</span>
                </div>
            </div>
            <div className='projectBody'>
                <div className='projectImageDiv'>
                    <img src={img1} alt="" className="fixed_img"/>
                </div>
                <div className='projectDetailDiv'>
                    <div className='header3'>
                        Help children bloom by improving their learning environment.
                    </div>
                    <div className='header4'>$2000</div>
                    <div>
                        <Progress />
                    </div>
                </div>
            </div>
			
	  	</div>
      );
  };

 
export default Project;
