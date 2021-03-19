import React from 'react';

const SearchBox = (props) => {
    return <div className="col col-sm-4">
        <h1>{props.heading}</h1>
        <input type="text" className="form-control" value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}placeholder="Search for Movies"/>
    </div>
};
export default SearchBox;