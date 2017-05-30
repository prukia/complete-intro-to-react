import React from 'react';
import { string } from 'prop-types'

const ShowCard = props => (
  <div className="show-card">
    <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </div>
);


//run-time check to see if you are including the write properties
//shape means object.
//if you do not put isRequired it means its optional
ShowCard.propTypes = {

    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
};
export default ShowCard;
