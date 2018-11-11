import React, { Component } from 'react';
// import firebase from '../firebase';
import Header from './Header';
import CandidateList from './CandidateList';
import Search from './Search';

class Landing extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch("https://civicmonitor.herokuapp.com/api/v2/politicians")
        .then((res)=>res.json())
        .then((res)=> {
            this.setState({
              politicians: res.data
            })
        })
      }

    //   componentWillMount() {
    //       this.setState({query: this.state.politicians})
    //   }


      handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
          searchTerm: event.target.value
        });
      }



  render() {

    
   
    return (
      <div>
        <Header/>

        <section className="section bg-home-img" id="home">
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto d-flex justify-content-center">
                                <div className="home-title text-center align-self-center">
                                    <h1 className="pt-2">Know your candidates</h1>
                                    <h5 className="home-desc pt-4 mx-auto">Learn More about those seeking to earn you votes. Go in depth on their issue positions and what they have been talking about. And compare them with just one click.</h5>
                                   
                                    <div>
                                    <Search onChange = {this.handleInputChange} />
                                    <p>{this.state.searchTerm}</p>
                                    </div>
                                  
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>  
            </div>  
        </section>

        <section className="section" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto text-center mb-5">
                    <i className="mdi mdi-diamond text-primary font-20 mr-2"></i>
                    <h3 className="mb-3 title">The 2019 Presidential Candidates</h3>
                   
                </div>
            </div>

            <CandidateList politicians={this.state.politicians}/>

         
         
        </div>
    </section>

    
    <section className="section pb-0" id="features">
    <div className="container">
        <div className="row">
            <div className="col-md-8 mx-auto text-center mb-5">
                <i className="mdi mdi-creation text-primary font-20 mr-2"></i>
                <h3 className="mb-3 title">Compare Candidates</h3>
                <p className="text-muted font-14">Struggling to make up your mind on which candidate has a better program for you? You can easily compare where they stand on the issues you care about. </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="card shadow-inset">
                    <div className="card-body">
                        <div className="features-cantain text-center">
                            <i className="mdi mdi-account-multiple-plus font-24 bg-soft-pink"></i>
                            <h4 className="mb-3">By Issue Position</h4>
                            <p className="text-muted">Compare two candidates on any of the 16 issues we are gathering data on. Choose the issue and the two candidates and compare, Here you will have a side by side comparison of the two of candidates on that one issue.</p>
                        </div>
                    </div>                            
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow-inset">
                    <div className="card-body">
                        <div className="features-cantain text-center">
                            <i className="mdi mdi-google-wallet font-24 bg-soft-warning"></i>
                            <h4 className="mb-3">By Political Party </h4>
                            <p className="text-muted">Compare two parties. When you select two parties to be compared, they appear side by side, with a list of the two candidates, their bio and their positions underneath. </p>
                        </div>
                    </div>                            
                </div>
            </div>
          
        </div>
    </div>

  
</section>

<footer className="container">
<p>© Powered by Civic Monitor</p>
</footer>


      </div>
    );
  }
}


export default Landing;
