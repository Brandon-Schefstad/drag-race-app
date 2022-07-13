import React from 'react';
import { useState } from 'react';
import QueenExpanded from './QueenExpanded';
import QueenImage from './QueenImage';
import Card from '@mui/material/Card';

const QueenCard = ({ name, id, image }) => {
  const [queenFocus, setQueenFocus] = useState(null);

  //Remember to keep your prop names consistent
  if (queenFocus === null) {
    async function fetchData() {
      const url = `http://www.nokeynoshade.party/api/queens/${id}`;
      try {
        const response = await fetch(url);
        const data = await response.json(); //Don't forget to use awaits!
        setQueenFocus(data);
      } catch (error) {
        console.error(error);
      }
    }
    return (
      <div>
        <h1 className="queenName">
          {name} {id}
        </h1>
        <img
          className="queenImage"
          onClick={() => {
            fetchData();
          }}
          src={image}
          alt="Promotional photo of"
        />
      </div>
    );
  } else {
    return (
      <Card
        className="queenExpanded"
        onClick={() => {
          setQueenFocus(null);
        }}
      >
        <QueenImage data={queenFocus} />
        <QueenExpanded data={queenFocus} />
      </Card>
    );
  }
};

export default QueenCard;
