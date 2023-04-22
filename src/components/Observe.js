import React, {useState, useEffect, useRef} from 'react';

const Observe = props => {
    const {
        children,
        className = '',
        threshold = 0.01,
        root = '0px'
    } = props;

    const [observed, setObserved] = useState(false);
    const rootElem = useRef(null);

    const observeElements = () => {
        const observer = new IntersectionObserver(([entry]) => {
                entry.intersectionRatio > threshold && setObserved(true);
        },
        {
            root: null,
            rootMargin: root,
            threshold
        });
        observer.observe(rootElem.current);
    };

    useEffect(()=>{
        observeElements();
    },[]);

    const classNames = () => {
        return `${className}${observed ? ' in-view' : ''}`;
    };

    return (
        <div ref={rootElem} className={classNames()}>
            {children}
        </div>
    );
};

export default Observe;