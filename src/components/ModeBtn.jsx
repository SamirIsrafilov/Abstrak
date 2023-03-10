import React, { useState } from 'react';
// import {MdLightMode} from 'react-icons/md'
// import {MdDarkMode} from 'react-icons/md'



const ModeBtn = ({ color, setColor }) => {
    const [state,setState] = useState(false);

    const switchColor = () => {
        setState(!state)
             setColor(color === 'light' ? 'dark' : 'light');  
      
    }
    return (
        <div>
            <button className={'btn rounded-0 mode_btn ' +(state ? 'mode_btn_dark': '')}  onClick={switchColor} id="mode_btn"></button>
        </div>
    )
}

export default ModeBtn;