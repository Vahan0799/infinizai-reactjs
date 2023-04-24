import React from 'react';
import {Link} from 'react-router-dom';

const LinkElem = props => {
    const {
        design,
        color,
        children,
        ...rest
    } = props;

    const classNames = () => {
        return `link${design ? ` link-${design}` : ''}`;
    };

    return (
        <Link className={classNames()} {...rest}>
            {design && design === 'solid-primary' || 'solid-secondary' ? (
                <>
                    <span>{children}</span>
                    {design === 'solid-primary' &&
                        <>
                            <i></i>
                            <i></i>
                        </>
                    }
                </>
            ) : (
                {children}
            )}
        </Link>
    );
};

export default LinkElem;