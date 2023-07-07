import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleNav, atTop, stickHeader} from '../store/slices/HeaderSlice';

import LinkElem from '../components/elements/Link';
import Image from '../components/elements/Image';
import Button from '../components/elements/Button';

import HeaderItems from '../jsons/header.json';

import Logo from '../assets/svg/logo.svg';
import CartIcon from '../assets/svg/cart-icon.svg';

const Header = () => {
    const [position, setPosition] = useState(window.scrollY);
    const dispatch = useDispatch();

    const isNavOpen = useSelector(state => state.header.isNavOpen);
    const isAtTop = useSelector(state => state.header.isAtTop);
    const isSticky = useSelector(state => state.header.isHeaderSticky);

    const stickyHeader = () => {
        let moving = window.scrollY;

        if (window.scrollY > 5 && !isNavOpen) {
            dispatch(stickHeader(position > moving));
            setPosition(moving);
            dispatch(atTop(false));
        } else if (window.scrollY <= 5 && !isNavOpen) {
            dispatch(atTop(true));
            dispatch(stickHeader(false));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeader);

        return () => {
            window.removeEventListener('scroll', stickyHeader);
        };
    });

    return (
        <header className={`header${isSticky ? ' header__sticky' : ''}${isAtTop ? ' header__visible' : ''}`}>
            <div className={`header__inner${isNavOpen ? ' header__open' : ''}`}>
                <div className="header__inner--main">
                    <LinkElem to="/">
                        <Image
                            src={Logo}
                            width={170}
                            height={48}
                            alt={'site-logo'}
                        />
                    </LinkElem>

                    <Button onClick={() => {dispatch(toggleNav())}} design="reset" className="nav__mobile">
                        <i></i>
                        <i></i>
                        <i></i>
                    </Button>
                </div>

                <nav className="nav">
                    <div className="nav__inner">
                        <ul className="nav__list">
                            {HeaderItems.headerLinks.map((item, index) =>
                                <li className="nav__list--item" key={`header-link-${index}`}>
                                    <LinkElem to={item.link} design="primary">
                                        {item.title}
                                    </LinkElem>
                                </li>
                            )}
                        </ul>

                        <div className="nav__info">
                            <Button design="reset" className="cart-trigger">
                                <Image
                                    src={CartIcon}
                                    width={53}
                                    height={40}
                                    alt="cart-icon"
                                />
                                <span className="quantity">0</span>
                            </Button>
                            <Button design="solid-primary" color="#FDD04A">Contact Us</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;