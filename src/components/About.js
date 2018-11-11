import React, { Component } from 'react';
import Header from './Header';


class About extends Component {
    render(){
        return(
            <div>
                <Header/>

                <section className="section bg-home-img" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mx-auto d-flex justify-content-center">
                                    <div className="home-title text-center align-self-center">
                                        <h1 className="pt-2">About KYC</h1>
                                    
                                      
                                </div>
                                                        
                            </div>
                        </div>
                    </div>
                </div>  
                </div>  
            </section>

            <section className="section pb-0" id="features">
    <div className="container">
        
        <div className="row">
        <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card shadow-inset">
                    <div className="card-body">
                        <div className="features-cantain text-align">
                            <i className="mdi mdi-account-multiple-plus font-24 bg-soft-pink"></i>
                            
                            <p className="text-muted">KYC is brought to you by Civic Monitor, a Nigerian non-profit organization committed to empowering citizens and driving engagement by providing the tools and data to help citizens make more thoughtful decisions. 

                            Our target with KYC is to democratize information about candidates vying for political offices in Nigeria. With over 90 registered political parties in the country, it can be overwhelming for eligible voters to keep track of where candidates stand on the most important issues. Some political parties have more resources than others, and this gives them an advantage in communicating their programs and ideas. KYC levels the playing field, such that every candidate has a shot at being heard. We provide data on the track records and issue positions of candidates in a fair, representative and easy to understand format so that voters interested in learning more can easily do so. We also provide the tools for voters to compare the different positions of two candidates on any particular issue.
                            
                            Are you interested in using our data API for your own apps or software?
                            </p>

                            <p>
                                <b> Contact us at kyc@civicmonitor.com </b>
                            </p>
                        </div>
                    </div>                            
                </div>
            </div>
            <div className="col-md-2"></div>
           
          
        </div>
    </div>

  
</section>


            </div>
        )
    }
}

export default About;
