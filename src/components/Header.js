import React, {useState, useEffect} from 'react'

import LinkElem from './elements/Link'
import Image from './elements/Image'
import Button from './elements/Button'

import HeaderItems from '../data/header.json'

import Logo from '../assets/svg/logo.svg'
import CartIcon from '../assets/svg/cart-icon.svg'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [position, setPosition] = useState(window.scrollY)
    const [headerSticky, setHeaderSticky] = useState(false)
    const [atTop, setAtTop] = useState(true)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    const stickyHeader = () => {
        let moving = window.scrollY

        if (window.scrollY > 5 && !navOpen) {
            setHeaderSticky(position > moving)
            setPosition(moving)
            setAtTop(false)

        } else if (window.scrollY <= 5 && !navOpen) {
            setAtTop(true)
            setHeaderSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', stickyHeader)

        return () => {
            window.removeEventListener('scroll', stickyHeader)
        }
    })

    return (
        <header className={`header${headerSticky ? ' header__sticky' : ''}${atTop ? ' header__visible' : ''}`}>
            <div className={`header__inner${navOpen ? ' header__open' : ''}`}>
                <div className="header__inner--main">
                    <LinkElem to="/">
                        <Image
                            src={Logo}
                            width={170}
                            height={48}
                            alt={'site-logo'}
                        />
                    </LinkElem>

                    <Button onClick={toggleNav} design="reset" className="nav__mobile">
                        <i></i>
                        <i></i>
                        <i></i>
                    </Button>
                </div>

                <nav className="nav">
                    <div className="nav__inner">
                        <ul className="nav__list">
                            {HeaderItems.headerLinks.map((item, index) =>
                                <li className="nav__list--item" key={index}>
                                    <LinkElem to={item.link} type="primary">
                                        {item.title}
                                    </LinkElem>
                                </li>
                            )}
                        </ul>

                        <div className="nav__info">
                            <Button design="reset">
                                <Image
                                    src={CartIcon}
                                    width={53}
                                    height={40}
                                    alt={'cart-icon'}
                                />
                            </Button>
                            <Button design="solid-primary" color="#FDD04A">
								Contact Us
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header