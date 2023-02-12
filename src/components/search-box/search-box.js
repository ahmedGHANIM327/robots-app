import { Component } from "react";

class SearchBox extends Component
{

    render()
    {
        const {onChangeHandler,placeholder} = this.props
        return (<input 
            className='search-box'
            type='text'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />);
    }
}

export default SearchBox;