import React from "react";
import QuickLinks from "../QuickLinks";
import PostsPage from "../PostsPage";
import Progress from "../Progress";
import ContactUs from "../ContactUs";
import Project from "../Project";
import Slider from "../Slider/Slider";
import img1 from '../../images/main.jpg';

const Home = (props) => {

    return (
        <div>
            <Slider></Slider>
            <img src={img1} alt="" className="fixed_img"/>
			<QuickLinks/>
			<Project/>
			<PostsPage/>
			{/* <GalleryPage/> */}
			<ContactUs/>
	  	</div>
      );
  };

 
export default Home;
