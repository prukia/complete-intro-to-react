// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-left: 10px;
`;



const ShowCard = (props: {

    poster: string,
    title: string,
    year: string,
    description: string
  }
) => (
  //replace div with <Wrapper>
  // <div className="show-card">
    <Wrapper>
      <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
      <div>
        <h3>{props.title}</h3>
        <h4>({props.year})</h4>
        <p>{props.description}</p>
      </div>
    </Wrapper>

);


//run-time check to see if you are including the write properties
//shape means object.
//if you do not put isRequired it means its optional
// ShowCard.propTypes = {
//
//     poster: string.isRequired,
//     title: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired
// };
export default ShowCard;
