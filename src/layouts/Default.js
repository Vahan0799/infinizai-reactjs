import React, {useEffect, useRef} from 'react'

import HeadMeta from '../components/HeadMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DefaultLayout = props => {
    const {
        title,
        description,
        image,
        children
    } = props

    const smoothWrapper = useRef(null)

    const SmoothScrollInstance = () => {
        const body = document.body,
            jsScroll = smoothWrapper?.current,
            height  = jsScroll.getBoundingClientRect().height - 1,
            speed = 0.12

        let offset = 0

        body.style.height = Math.floor(height) + 'px'

        function smoothScroll(){
            offset += (window.pageYOffset - offset) * speed
            let scroll = 'translateY(-'+offset+'px) translateZ(0) '
            jsScroll.style.transform = scroll
            requestAnimationFrame(smoothScroll)
        }

        smoothScroll()
    }

    useEffect(() => {
        SmoothScrollInstance()

        return () => {
            SmoothScrollInstance()
        }
    },[])

    return (
        <>
            <HeadMeta title={title} description={description} image={image}/>
            <main>
                <Header/>
                <div className="page-wrapper" ref={smoothWrapper}>
                    {children}
                </div>
                <Footer/>
            </main>
        </>
    )
}

export default DefaultLayout