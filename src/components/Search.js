import React from 'react';
// import Candidate from './Candidate';
// import Suggestion from './Suggestion';

var divStyle = {
    width: '100%',
     height: '50px',
     borderRadius: '5px',
      border: '1px solid #efefef',
      padding: '10px'
}

  
const Search = (props) =>  (
            <form className="mt-5">
                <input type="text" 
                    placeholder="Search preferred candidate..."                                    
                    value={props.searchTerm}
                    style={divStyle}
                    />
             </form>
);

export default Search;