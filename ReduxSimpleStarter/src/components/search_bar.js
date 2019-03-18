import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: '' };
    }
//every class must have a render function that returns JSX
    render() {
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange={(event) => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

//makes SearchBar availabe outside of the file
export default SearchBar;
