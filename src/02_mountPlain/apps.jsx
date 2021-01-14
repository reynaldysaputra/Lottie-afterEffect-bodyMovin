import React, { Fragment , useEffect, useRef, useState} from 'react';
import style from './style.module.css';
import mount1 from '../img/mount1.jpeg';
import Lottie from 'lottie-react-web'
import desktopPlain from './cobaText.json';
import lottie from 'lottie-web';

function MountPlain() {
   const [isPlay, setPlay] = useState(false);
   const [isPaused, setPaused] = useState(false);
   const [reverse, setReverse] = useState(true);
   const refs = useRef(null);

   // const defaultOptions = {
   //    loop: true,
   //    autoplay : false,
   //    animationData: desktopPlain,
   //    renderer : 'svg'
   //  };

    useEffect(() => {
      lottie.loadAnimation({
         container : refs.current,
         renderer:'svg',
         autoplay:false,
         animationData : desktopPlain,
         loop : true,
         name:'ninja'
      });
    }, [])

    useEffect(() => {
      if(reverse) lottie.setDirection(1);
      else lottie.setDirection(-1);
    }, [reverse])

   return(
      <Fragment>
         <div className={style.container} style={{backgroundImage: `url(${mount1})`}}>
            {/* <Lottie 
               height={700}
               width={700}
               isPaused={isPaused}
               direction={(reverse === false ? 1 : -1)}
               options={{
                  loop: true,
                  animationData: desktopPlain,
                  autoplay : -1
               }}
            /> */}
            <div style={{width:'300px',height:'300px'}} ref={refs} data-name='ninja' className='lottie'>

            </div>

            {/* <div data-animation-path='./cobaText.json' className='lottie' style={{width:'100px',height:'100px',background:'yellow'}} data-name='ninja'></div> */}
         </div>

         <button onClick={() => lottie.play()}>Play</button>
         <button onClick={() => lottie.pause()}>Stop</button>
         <button onClick={() => setReverse(!reverse)}>Reverse</button>
         <button onClick={() => lottie.loadAnimation()}>Nyalakan animasi</button>
         <button onClick={() => lottie.destroy(refs.current.dataset.name)}>Hilangkan animasi</button>

      </Fragment>
   )
}

export default MountPlain;