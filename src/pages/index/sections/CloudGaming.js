import React from 'react';
import LinkElem from '../../../components/elements/Link';
import Video from '../../../components/elements/Video';
import Esports from '../../../components/Esports';
import Observe from '../../../components/Observe';
import HomeVideo from '../../../assets/videos/home-video.mp4';
import VideoPoster from '../../../assets/images/video-poster.jpg';

const CloudGaming = () => {

    return (
        <section className="cloud-gaming">
            <div className="cloud-gaming__container container">
                <Observe className="cloud-gaming__article fade-reveal">
                    <Esports/>
                    <h3 className="h2">The New Era Of Cloud Gaming Here</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>
                    <LinkElem to="#." design="solid-secondary">Explore More</LinkElem>
                </Observe>
                <Observe className="cloud-gaming__media" threshold={0.5}>
                    <Video
                        src={HomeVideo}
                        type="mp4"
                        poster={VideoPoster}
                        loop
                    />
                </Observe>
            </div>
        </section>
    );
};

export default CloudGaming;