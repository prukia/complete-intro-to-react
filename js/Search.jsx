// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';



// const Search = () => <h1>hi lol this is search</h1>;
/* prints out actual JSON */
/* <pre><code>{}</code>{{JSON.stringify(preload, null, 4)}}</pre> */

//converted to ES6 class
const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);

    //state//
    // a component can have its own state...only a component can modify it's own state
