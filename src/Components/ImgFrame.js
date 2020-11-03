import React, {useState} from "react";

const ImgFrame = ({src, h, author}) => {
    const [show, setShow] = useState(0);
    return (
        <div className={'imgframe ' + (show ? 'pop' : '')} style={{height: Number(h)}}>
            <img className={show? 'mainimgpop' : 'mainimg'} src={src} height={Number(h)}/>
            <span className={(show ? 'show' : 'close')} onClick={()=>setShow(0)}>X</span>
            <div className='actions'>
                <button className={show ? 'hide' : ''} onClick={()=>setShow(show ? 0 : 1)}>ℹ </button>
                <button onClick={() => window.location = src}>⏬</button>
                <div className={show ? '' : 'hide'}>
                    {author}
                </div>
            </div>
        </div>
    );
  };

 
export default ImgFrame;
