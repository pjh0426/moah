import React, { useState, useEffect }from "react";
import Progressbar from './Progressbar';


const Progress = (props) => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(60), 2000);
      }, []);


    return (
        <Progressbar bgcolor={'#1F2B5D'} completed={completed} />
      );
  };

 
export default Progress;
