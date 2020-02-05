import React from 'react';

function Searchbar({searchText, handleChange}){
    return(<React.Fragment>
    <input value={searchText} placeholder="search bar" onChange={(event)=> handleChange(event.target.value)} />
    </React.Fragment>)
}

export default Searchbar;