import React from 'react';
import ReactDOM from 'react-dom';

//Need to specify import from our file.
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAw39JcVN6CDmbIk5B5o0aLjNFwRwCGvAo';

//Create a new component,it should produce some HTML
//this is a class, we can have many instances of APP.
//So will need to make an instance of APP
const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}
//Take the components generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //this creates an instance of the class App
