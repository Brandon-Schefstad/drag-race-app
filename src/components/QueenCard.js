import React from 'react';
import { useState } from 'react';

const QueenCard = ({ name, id, image }) => {
	//Remember to keep your prop names consistent

	return (
		<div>
			<h1 className="queenName">
				{name} {id}
			</h1>
			<img
				className="queenImage"
				onClick={() => {
					alert('clicked');
				}}
				src={image}
				alt=""
			/>
		</div>
	);
};

export default QueenCard;
