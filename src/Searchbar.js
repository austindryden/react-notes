import React from 'react';

function Searchbar({searchText}){
    return(<React.Fragment>
    <input type="text" value={searchText} />
    </React.Fragment>)
}

export default Searchbar;