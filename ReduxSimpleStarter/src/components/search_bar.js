import React, {Component} from 'react';


class SearchBar extends Component {
//every class must have a render function that returns JSX
    render() {
        return <input onChange={this.onInputChange} />; //when there is a change in the input the pass in our handler
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

//makes SearchBar availabe outside of the file
export default SearchBar;
