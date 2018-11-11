import React from 'react';
// import { Link } from "react-router-dom";
// import CandidateDetails from './CandidateDetails';
import { Link } from "@reach/router";
import {Image} from 'cloudinary-react';

const imageStyle = {
  borderRadius: '10px',
  width: '300px',
  maxHeight: '200px'
};

class Candidate extends React.Component{
  render(){
    const { name, image, id} = this.props;

  
    return(

      <div className="col-md-4">
      <div className="card pricing-card">

      <div className="card-body">
     
          <div className="pricingTable">  
              <span className="pricing-icon">

              <Image cloudName="civic-monitor" publicId={image} width="300" height="200" crop="scale" style={imageStyle}/>

             </span>
              <h5 className="py-3 m-0 text-primary">{name}</h5>                                    
              <p></p>

              <Link to= {`/details/${id}`} className="btn btn-orange px-4">Learn more</Link>

          </div>

      </div>
      </div> 

      </div>
     
    )
  }
}

  
export default Candidate;