import React from 'react';
import Input from '../../../components/elements/Input';
import Button from '../../../components/elements/Button';
import Underline from '../../../components/Underline';

const Join = () => {
	return (
		<section className="join__wrapper">
			<div className="join__container">
				<div className="join__head">
					<h2>Join the largest gaming&nbsp;
						<Underline color="blue">community</Underline>
					</h2>
					<p>
						Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus
						lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada
						feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo
					</p>
				</div>
				<div className="join__form">
					<Input type="email"
						   id="join-email"
						   label="Your Email Address"
					/>
					<Button design="submit">SUBMIT</Button>
				</div>
			</div>
		</section>
	)
};

export default Join;