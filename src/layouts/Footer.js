import React from 'react';
import Image from '../components/elements/Image';
import LinkElem from '../components/elements/Link';

import Logo from '../assets/svg/logo.svg';
import footerData from '../jsons/footer.json';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__content">
					<div>
						<LinkElem to="/">
							<Image
								src={Logo}
								width={170}
								height={48}
								alt={'site-logo'}
							/>
						</LinkElem>
						<p>
							Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis
							volutpat. Cursus sed massa non .
						</p>
					</div>
					<div className="footer__links">
						{footerData.map((item, key) =>
							<ul key={`${key}-col`} className="footer__list">
								<li className="footer__list-title">{item.title}</li>
								{item.links.map((link, index) =>
									<li key={`inner-${index}`} className="footer__list-item">
										{item.title !== 'Social Media' ?
											(<LinkElem to={link.url}>
												{link.title}
											</LinkElem>)
											: (
												<a href={link.url} target="_blank">
													<Image src={require(`../assets/svg/${link.icon}.svg`)}
														   alt={`${link.icon}-icon`}
														   className="transition"
													/>
												</a>
											)
										}
									</li>
								)}
							</ul>
						)}
					</div>
				</div>
				<p>Copyright by {currentYear} Vahan.</p>
			</div>
		</footer>
	);
};

export default Footer;