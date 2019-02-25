import React from 'react';

//Create a new component,it should produce some HTML
const App = function (){
  return <div>Hi!</div>;
}
//Take the components generated HTML and put it on the page(in the DOM)
React.render(App);
