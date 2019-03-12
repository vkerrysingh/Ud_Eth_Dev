import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component,it should produce some HTML
//this is a class, we can have many instances of APP.
//So will need to make an instance of APP
const App = function (){
  return <div>Hi!</div>;
}
//Take the components generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />); //this creates an instance of the class App
