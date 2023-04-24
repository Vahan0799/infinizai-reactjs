import React from 'react';
import Image from '../../../components/elements/Image';
import Esports from '../../../components/Esports';
import Observe from '../../../components/Observe';
import GamingNeedsData from '../../../jsons/gaming-needs.json';
import needsIcon from '../../../assets/svg/dot-icon.svg';

const GamingNeeds = () => {
	return (
		<section className="gaming-needs">
			<div className="gaming-needs__container container">
				<Esports/>
				<h3 className="h2">Your One Stop Shop Gaming Needs!</h3>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
					totam rem aperiam</p>
				<div className="gaming-needs__grid">
					{GamingNeedsData.map((item, index) =>
						<Observe key={`needs-item-${index}`} className="gaming-needs__grid--item">
							<Image
								src={needsIcon}
								width={20}
								height={20}
								alt={'dot-icon'}
							/>
							<article>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						</Observe>
					)}
				</div>
			</div>
		</section>
	);
};

export default GamingNeeds;