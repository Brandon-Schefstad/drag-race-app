import React, { useState } from 'react';
import QueenCard from './QueenCard';

const QueenFocus = ({ data }) => {
	const [queenFocus, setQueenFocus] = useState(null);
	if (queenFocus == null) {
		<QueenCard name={data.name} id={data.id} image={data.image_url} />;
	} else {
		console.log(queenFocus);
		return (
			<section
				onClick={() => {
					setQueenFocus(null);
				}}
				className="queenHero"
			>
				<section className="queenCloseup">
					<h1 className="queenName"></h1>
					<img
						className="queenImageFocus"
						onClick={() => {
							setQueenFocus(null);
						}}
						// src={image}
						alt=""
					/>
				</section>
				{/* End of queenCloseup */}
				<section className="queenData">
					{/* Quote */}
					<h3 className="queenQuote">
						{/* "{queenData.quote}" - {name} */}
					</h3>

					{/*  */}
				</section>
			</section>
		);
	}
};

export default QueenFocus;
