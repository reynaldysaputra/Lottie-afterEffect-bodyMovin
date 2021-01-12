import React, { Fragment, useState } from 'react';
import Lottie from 'lottie-react-web'
import svgData from './data.json';
import backgroundOrang from './backgroundOrang.json';

function Basic(){
   const [isPlay, setPlay] = useState(false);
   const [isPaused, setPaused] = useState(true);

   const defaultOptions = {
      loop: true,
      autoplay: isPlay, 
      animationData: svgData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const defaultOptions2 = {
      loop: true,
      autoplay: isPlay, 
      animationData: backgroundOrang,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

   return(
      <Fragment>
         {console.log(isPlay)}
         <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
            isPaused={isPaused}
         />

         <button onClick={() => {
            setPlay(!isPlay);
            setPaused(!isPaused);
         }}>{isPlay ? 'Paused' : 'Play'}</button>

         <Lottie 
            options={defaultOptions2}
            height={400}
            width={400}
            isPaused={isPaused}
         />

         <button onClick={() => {
            setPlay(!isPlay);
            setPaused(!isPaused);
         }}>{isPlay ? 'Paused' : 'Play'}</button>
      </Fragment>
   )
}

export default Basic;