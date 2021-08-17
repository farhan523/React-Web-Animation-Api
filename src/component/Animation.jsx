import React from 'react'
import './style.css'
import bird from './image/bird-blue.gif'
import grass from './image/grass.gif'
import useWebAnimations from '@wellyshen/use-web-animations';

function Animation() {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: { transform: ["translateX(0)", "translateX(1000px)"] },
        animationOptions: 1000,
        id: "123",
        playbackRate: 0.2,
        autoPlay: true,
        iterations: Infinity,
        onFinish: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the finished state
            animation.play()
        },
    })

    const play = () => {
        getAnimation().play();
    };


    const pause = () => {
        getAnimation().pause();
    };

    const cancel = () => {
        getAnimation().cancel();
    };

    return (
        <div className="zz">
            <div className="head">
                <h1>Birds Animation</h1>
                <h2> Current State: {playState}</h2>
                <div>
                    <button type="button" onClick={play} className="btn">Play</button>
                    <button type="button" onClick={pause} className="btn">Pause</button>
                    <button type="button" onClick={cancel} className="btn">Re set</button>
                </div>
            </div>

            <div className="bird">
                <div className="animate" ref={ref}>
                    <img className='dogImage' src={bird} alt="" />
                    <img className='catImage' src={bird} alt="" />
                </div>
            </div>
            <div className='footer'>
                <img className='grass' src={grass} alt="" />
                <img className='grass' src={grass} alt="" />
                <img className='grass' src={grass} alt="" />
            </div>
        </div>
    )
}

export default Animation
