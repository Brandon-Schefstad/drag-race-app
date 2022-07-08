import React from 'react';
import { useState } from 'react';

import QueenCard from './QueenCard';

const SeasonHero = ({ isLoaded, cast }) => {
	if (isLoaded == true) {
		console.log(isLoaded);
		// cast.forEach((queen) => {
		// 	console.log(queen.name);
		// });

		return (
			<div className="seasonHero grid">
				{cast.map((queen) => {
					return (
						<QueenCard
							name={queen.name}
							id={queen.id}
							image={queen.image_url}
						/>
					);
				})}
			</div>
		);
	}
};

export default SeasonHero;
