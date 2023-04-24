import React from 'react';

const Waves = () => {
	let waveItems = [];

	for (let i = 0; i < 20; i++) {
		waveItems.push(i);
	}

	const waveElements = waveItems.map((item, key) =>
		<div key={`wave-${key}`} className="wave__item"/>
	);

	return (
		<div className="wave__container">{waveElements}</div>
	);
};

export default Waves;