import './App.css';
// import React, { Component } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect } from 'react';

// COMPONENTS
import SeasonHero from './components/SeasonHero';

function App() {
	const [season, setSeason] = React.useState(1);
	const [cast, setCast] = React.useState([]);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const handleChange = (event: SelectChangeEvent) => {
		setSeason(event.target.value);
	};
	useEffect(() => {
		// if (season === 1) {
		// 	fetchData(1);
		// }
		fetchData(season);
	}, [season]);
	async function fetchData(season) {
		const url = `http://www.nokeynoshade.party/api/seasons/${season}/queens`;
		try {
			const response = await fetch(url);
			const data = await response.json(); //Don't forget to use awaits!
			setCast(data);
			setIsLoaded(true);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<Box className="seasonSelect">
				<FormControl fullWidth>
					<InputLabel className="seasonText">
						Select a Season
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={season}
						label="season"
						onChange={handleChange}
					>
						<MenuItem value={1}>Season 1</MenuItem>
						<MenuItem value={2}>Season 2</MenuItem>
						<MenuItem value={3}>Season 3</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<SeasonHero isLoaded={isLoaded} cast={cast} />
		</div>
	);
}

export default App;
