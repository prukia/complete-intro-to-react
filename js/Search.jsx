import React, { Component }from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';
// const Search = () => <h1>hi lol this is search</h1>;
/* prints out actual JSON */
/* <pre><code>{}</code>{{JSON.stringify(preload, null, 4)}}</pre> */

//converted to ES6 class
class Search extends Component{
  // constructor (props){
  //   super(props)
  //   //initializing state
  //   this.state = {
  //     searchTerm: 'this is some sort of debug statement'
  //   };
  //   //second way of doing it
  //   // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  //   }
//simple way of writing state and handle...
  state = {
    searchTerm: ''
  };
    //way to let react know 'hey, um updating this you need to render'!
    handleSearchTermChange = (event) => {
      this.setState({searchTerm: event.target.value})
  };
  //* displays search terms *//
  //* <h1>{this.state.searchTerm}</h1> *//
render () {
  return(
  <div className="search">
    <header>
      <h1>svideo</h1>
      <input onChange= {this.handleSearchTermChange}
        // onChange= {this.handleSearchTermChange,bind()}
        //the bad-way of doing it
         value={this.state.searchTerm}
         type="text"
         placeholder="search"/>
    </header>
    <div>
        {preload.shows
          .filter(
            show =>
            `${show.title} ${show.description}`. toUpperCase().
        indexOf(this.state.searchTerm.toUpperCase()) >= 0
      )
          .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);
}
}
export default Search;


//state//
// a component can have its own state...only a component can modify it's own state
