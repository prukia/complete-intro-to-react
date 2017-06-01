// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled((Link: any))`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;




// const ShowCard = (props: Show) => (
  //replace div with <Wrapper>
  // <div className="show-card">
  class ShowCard extends Component {
    shouldComponentUpdate() {
      return false;
    }
    props: Show;
    render() {
      return (
        <Wrapper to={`/details/${this.props.imdbID}`}>
          <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
          <div>
            <h3>{this.props.title}</h3>
            <h4>({this.props.year})</h4>
            <p>{this.props.description}</p>
          </div>
        </Wrapper>
      );
    }
  }

  export default ShowCard;

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
