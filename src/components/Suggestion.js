import React from 'react';

const Suggestion = (props) => {
  
  return (
    <ul>
   { props.politicians.map( politician => (
        <li key={politician.id}>
          {politician.name}
        </li>
      ))}

      </ul>
  ) 
 
}

export default Suggestion;
