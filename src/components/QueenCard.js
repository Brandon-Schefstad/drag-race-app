import React from 'react';
import { useState } from 'react';

const QueenCard = ({ name, id, image }) => {
	const [queenFocus, setQueenFocus] = useState(null);

	//Remember to keep your prop names consistent
	if (queenFocus === null) {
		function logger() {
			console.log('clicked');
		}

		return (
			<div>
				<h1 className="queenName">
					{name} {id}
				</h1>
				<img
					className="queenImage"
					onClick={() => {
						setQueenFocus(name);
					}}
					src={image}
					alt=""
				/>
			</div>
		);
	} else {
		function logger() {
			console.log('clicked2');
		}
		async function fetchData(season) {
			const url = `http://www.nokeynoshade.party/api/queens/${id}`;
			try {
				const response = await fetch(url);
				const data = await response.json(); //Don't forget to use awaits!
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		}
		return (
			<section
				onClick={() => {
					setQueenFocus(null);
				}}
				className="queenHero"
			>
				<section className="queenCloseup">
					<h1 className="queenName">
						{name} {id}
					</h1>
					<img
						className="queenImageFocus"
						onClick={() => {
							setQueenFocus(name);
						}}
						src={image}
						alt=""
					/>
				</section>
				{/* End of queenCloseup */}
				<section className="queenInfo">
					{/* Quote */}
					{/* Seasons */}
					{/*  */}
				</section>
			</section>
		);
	}
};

export default QueenCard;
