import React, {useState, useRef, useEffect} from 'react';

const Underline = props => {
    const {
        color,
        children
    } = props;

    const [fillColor, setFillColor] = useState(false);
    const underlineElem = useRef(null);

    const underlineVisible = () => {
        const threshold = 0.01;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.intersectionRatio > threshold) setFillColor(true);
        },
        {
            root: null,
            rootMargin: '0px',
            threshold
        });
        observer.observe(underlineElem.current);
    };

    const classNames = () => {
        return `underline${fillColor ? ` underline-${color} in-view` : ''}`;
    };

    useEffect(() => {
        underlineVisible();
    }, []);

    return (
        <span ref={underlineElem} className={classNames()}>{children}</span>
    );
};

export default Underline;