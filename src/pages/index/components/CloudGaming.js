import React, {useRef, useState} from 'react'

import LinkElem from '../../../components/elements/Link'
import Video from '../../../components/elements/Video'
import Button from '../../../components/elements/Button'
import Esports from '../../../components/Esports'
import AnimateOnScroll from '../../../components/AnimateOnScroll'

import HomeVideo from '../../../assets/videos/home-video.mp4'
import VideoPoster from '../../../assets/images/video-poster.jpg'

const CloudGaming = () => {
    const VideoElem = useRef(null)
    const [PlayVideo, setPlayVideo] = useState(false)

    const playVideo = () => {
        if (!PlayVideo) {
            VideoElem?.current.play()
            setPlayVideo(true)
        } else {
            VideoElem?.current.pause()
            setPlayVideo(false)
        }
    }

    return (
        <section className="cloud-gaming">
            <div className="cloud-gaming__container container">
                <article className="cloud-gaming__article">
                    <Esports/>
                    <h3 className="h2">The New Era Of Cloud Gaming Here</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>
                    <LinkElem to="#." type="solid-secondary">Explore More</LinkElem>
                </article>
                <AnimateOnScroll className="cloud-gaming__media"
                    AnimationOrigin="top"
                    AnimationDistance={'80px'}
                    AnimationDelay={300}
                    AnimationEasing={'ease'}
                >
                    <Button className={`cloud-gaming__button${PlayVideo ? ' playing' : ''}`} onClick={playVideo}></Button>
                    <Video
                        src={HomeVideo}
                        type="mp4"
                        poster={VideoPoster}
                        loop
                        ref={VideoElem}
                    />
                </AnimateOnScroll>
            </div>
        </section>
    )
}

export default CloudGaming