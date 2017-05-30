import React from 'react';
// same as const React= require (x)
// x = 'react'
import {render} from 'react-dom';

// to replace React.createElement

// const ce = React.createElement
// you wouldn't call it something other than props
  const MyTitle = function(props){
    // return (
    //   ce('div', null,
    //   ce('h1', {style: {color: props.color}}, props.title)
    // )
    // )
  // const style = {color: props.color}
    return (
      <div>

        <h1 style={ {color: props.color}}> {props.title}</h1>
      </div>
      //to get it to work you would need to wrap it in a Div
      // <h2>doesn't work</h2>
    );
  };
// creating a react component (usable)
// MyFirstComponent is a class..it's rendering a div
// a component is incapsulated
  const MyFirstComponent = function() {
    // instead of null you can pass an empty object {}
    // inside of the div you are nesting
    // return ce(
    // 'div',
    // {id: 'my-first-component'},
    // ce(MyTitle, {title: 'Game of Thrones', color: 'YellowGreen'}),
    // ce(MyTitle, {title: 'Stranger Things', color: 'GreenYellow'}),
    // ce(MyTitle, {title: 'Rick and Morty', color: 'LimeGreen'}),
    // ce(MyTitle, {title: 'House of Cards', color: 'peru'})
    //change above 3 lines too:

// this format is post-babel
    return <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Stranger Things" color="GreenYellow" />
    <MyTitle title="House of Cards" color="peru" />
    <MyTitle title="Stranger Things" color="burlywood" />

</div>
    // ce('h1', null, 'This is my first component!')
  );
  };
  render(<MyFirstComponent/>,document.getElementById('app'));
