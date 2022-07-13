import React from 'react';
import Paper from '@mui/material/Paper';

const QueenExpanded = ({ data }) => {
  if (data.quote.length !== 2) {
    return (
      <div>
        <Paper className="queenQuote">
          {' '}
          {data.quote} - {data.name}
        </Paper>

        {data.seasons.map((season) => (
          <h3>Season:{season.seasonNumber}</h3>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Paper className="queenQuote" variant="outlined">
          {data.name} was not available for comment.
        </Paper>
        {data.seasons.map((season) => (
          <h3>Season:{season.seasonNumber}</h3>
        ))}
      </div>
    );
  }
};

export default QueenExpanded;
