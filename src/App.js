import './App.css';
import React from "react";
import {
  Route,
//   NavLink,
  BrowserRouter as Router,
  Switch, Redirect
} from "react-router-dom";

import Home from "./Components/Default/Home";
import GalleryPage from "./Components/GalleryPage";
// import AppNav from "./Nav";
import './index.css';
import img1 from './images/main.jpg';
import Navbar from './Components/Navbar/Navbar';



const App = () => {
	console.log('app');
	

    return (
	<Router>
		<div className="App">
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/home" component={Home}/>
				{/* <Route exact path="/project" component={Project}/> */}
				<Route exact path="/Events" component={GalleryPage}/>
			</Switch>
		</div>
	</Router>	 
    );
  }

 
export default App;