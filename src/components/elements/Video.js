import React, {useEffect, useRef, useState} from 'react';
import Button from './Button';

const Video = props => {
    const {
        src,
        type,
        fallBackSrc,
        fallBackType,
        ...rest
    } = props;

    const videoElement = useRef(null);
    const [PlayVideo, setPlayVideo] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    let interval;

    const playVideo = () => {
        !PlayVideo ? setPlayVideo(videoElement?.current.play()) : setPlayVideo(videoElement?.current.pause());
    };

    const updateVideoTime = () => {
        setProgress((videoElement?.current.currentTime / videoElement?.current.duration) * 100);

        interval = setInterval(() => {
            setCurrentTime(videoElement?.current.currentTime);
        },1000);
    };

    const handleVideoProgress = (event) => {
		setProgress(Number(event.target.value));
        videoElement.current.currentTime = (videoElement.current.duration / progress);
    };

    const currentPlayBack = Math.floor(currentTime / 60) + ':' + ('0' + Math.floor(currentTime % 60)).slice(-2);

    const currentVideoDuration = Math.floor(videoElement.current?.duration / 60) + ':' + ('0' + Math.floor(videoElement.current?.duration % 60)).slice(-2);

    useEffect(() => {
        return () => clearInterval(interval);
    },[]);

    return (
        <div className="video-container">
            <Button className={`video-playback${PlayVideo ? ' playing' : ''}`} onClick={playVideo}/>
            <video {...rest} playsInline ref={videoElement}
                onClick={playVideo}
                onTimeUpdate={updateVideoTime}
            >
                {fallBackSrc && fallBackType &&
                    <source src={fallBackSrc} type={`video/${fallBackType}`}/>
                }
                <source src={src} type={`video/${type}`}/>
            </video>
            {PlayVideo &&
                <div className="video-controls">
                    <div className="video-duration">
                        <div className="progress">
                            <input type="range"
                                   min="0" max="100"
                                   value={progress}
								   onMouseDown={() => videoElement.current.pause()}
								   onMouseUp={() => videoElement.current.play()}
                                   onChange={(e) => handleVideoProgress(e)}
                            />
							<div className="bar" style={{width: `calc(${progress}% + 4px)`}}/>
                        </div>
                        <div className="timeline">
                            <span>{currentPlayBack} &nbsp; / &nbsp; {currentVideoDuration}</span>
                        </div>
                    </div>
                    <div className="video-buttons">
                        <div className="video-forwards">
                            <span className="backwards" onClick={() => videoElement.current.currentTime -= 10}/>
                            <span className="forwards" onClick={() => videoElement.current.currentTime += 10}/>
                        </div>
                        <div className="video-expands">
                            <span className="fullscreen" onClick={() => videoElement.current.requestFullscreen()}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Video;