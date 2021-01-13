import React, { Fragment , useState} from 'react';
import style from './style.module.css';
import mount1 from '../img/mount1.jpeg';
import Lottie from 'lottie-react-web'
import desktopPlain from './cobaText.json';

function MountPlain() {
   const [isPlay, setPlay] = useState(false);
   const [isPaused, setPaused] = useState(false);
   const [reverse, setReverse] = useState(false);

   const defaultOptions = {
      loop: true,
      autoplay : true,
      animationData: desktopPlain,
      renderer : 'svg'
    };

    console.log(defaultOptions);

   return(
      <Fragment>
         <div className={style.container} style={{backgroundImage: `url(${mount1})`}}>
            <Lottie 
               height={700}
               width={700}
               isPaused={isPaused}
               direction={(reverse === false ? 1 : -1)}
               options={defaultOptions}
            />
         </div>

         <button onClick={() => setPlay(true)}>Play</button>
         <button onClick={() => setPaused(true)}>Stop</button>
         <button onClick={() => setReverse(!reverse)}>Reverse</button>

      </Fragment>
   )
}

export default MountPlain;