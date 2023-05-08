import React from 'react';
import Image from '../../../components/elements/Image';
import Observe from '../../../components/Observe';
import CategoryData from '../../../jsons/categories.json';

const Categories = () => {
	return (
		<section className="categories">
			<Observe className="categories__container" threshold={0.5}>
				{CategoryData.map((item, index) =>
					<div key={`category-${index}`} className="categories__item">
						<figure>
							<Image
								src={require(`../../../assets/images/${item.image}.jpg`)}
								alt={item.caption}
								className="object-cover"
							/>
							<figcaption className="categories__item-description w-100 h-100">
								<Image
									src={require(`../../../assets/svg/${item.icon}.svg`)}
									alt={item.caption + ' Icon'}
									width={128}
									height={128}
								/>
								<span>{item.caption}</span>
							</figcaption>
						</figure>
					</div>
				)}
			</Observe>
		</section>
	);
};

export default Categories;