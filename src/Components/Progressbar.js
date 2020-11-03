import React from "react";
// import { View, Text } from "react-native";
// import ProgressBar from "react-native-animated-progress";

import './Progress.css'
const Progressbar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 3s ease-in-out',
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      );
  };

 
export default Progressbar;
