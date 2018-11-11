import React, { Component } from 'react';
import Candidate from './Candidate';

class CandidateList extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            politicians : [],
            isLoaded: false,
            searchTerm : ''
        }
    }

    componentDidMount() {
        fetch("https://civicmonitor.herokuapp.com/api/v2/politicians")
        .then((res)=>res.json())
        .then((res)=> {
            this.setState({
                isLoaded: true,
              politicians: res.data
            })
        })
      }

      render(){
          return(
            <div className="row">

            {this.state.politicians
                .filter( politician => `${politician.name}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                .map(politician => (
                <Candidate
                        key={politician.id}
                        id={politician.id}
                        name= {politician.name}
                        image = {politician.image}
                         
                />
            )
               
        )}
        </div>
          )
      }
}

export default CandidateList;