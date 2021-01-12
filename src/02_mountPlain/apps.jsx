import React, { Fragment , useState} from 'react';
import style from './style.module.css';
import mount1 from '../img/mount1.jpeg';
import Lottie from 'lottie-react-web'
import desktopPlain from './desktopPlainAfterEffect.json';

function MountPlain() {
   const [isPlay, setPlay] = useState(false);
   const [isPaused, setPaused] = useState(true);

   const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: desktopPlain,
      speed : 10
    };

   return(
      <Fragment>
         <div className={style.container} style={{backgroundImage: `url(${mount1})`}}>
            <Lottie 
               options={defaultOptions}
               height={700}
               width={700}
            />
         </div>
      </Fragment>
   )
}

export default MountPlain;