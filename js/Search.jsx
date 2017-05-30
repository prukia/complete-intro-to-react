import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';
// const Search = () => <h1>hi lol this is search</h1>;
/* prints out actual JSON */
/* <pre><code>{}</code>{{JSON.stringify(preload, null, 4)}}</pre> */

const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard show={show} />)}
  </div>
);

export default Search;
