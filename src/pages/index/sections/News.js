import React from 'react';
import Esports from '../../../components/Esports';
import LinkElem from '../../../components/elements/Link';
import Image from '../../../components/elements/Image';
import Observe from '../../../components/Observe';

import newsData from '../../../jsons/blog-news.json'

const News = () => {
	return (
		<section className="news__wrapper">
			<div className="news__container">
				<Observe className="news__head fade-reveal">
					<div>
						<Esports/>
						<h2>LATEST NEWS & ARTICLES</h2>
					</div>
					<LinkElem to="/blog" design="solid-primary">Read More</LinkElem>
				</Observe>
				<Observe className="news__articles">
					{newsData.map((article, key) =>
						<figure key={`article-${key}`} className="news__article">
							<LinkElem to={article.url}>
								<Image src={require(`../../../assets/images/${article.image}.png`)}
									   alt={article.title}/>
							</LinkElem>
							<figcaption>
								<p>{article.date}</p>
								<LinkElem to={article.url}><p>{article.title}</p></LinkElem>
							</figcaption>
						</figure>
					)}
				</Observe>
			</div>
		</section>
	)
}

export default News;