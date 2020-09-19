import '../style.css';
import React, { Component } from 'react';
import { Fragment } from 'react';


class Navigation extends Component
{
      render(){
          return(
            <Fragment>                               
                    <div className=" col-sm-6 col-md-5 col-lg-9 pt-4">
                        <div className="d-flex justify-content-between">                            
                            <img 
                                src="https://www.flaticon.com/svg/static/icons/svg/876/876207.svg" 
                                alt="menu"
                                height="30"
                                className="mr-5 ml-2"
                            />                                                   
                            <h4>MyKantin</h4>                                                                          
                             <div className="input-group mb-3 pl-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="https://www.flaticon.com/svg/static/icons/svg/1086/1086933.svg" alt="searcb" height="20"/>
                                    </span>                                        
                                </div>
                                <input                                    
                                    type="text" 
                                    className="form-control search bg-light" 
                                    placeholder="Cari Makan Bang?" 
                                    aria-label="Username" 
                                    aria-describedby="addon-wrapping"                                                                                                                                                                                
                                />
                             </div>                                                                              
                        </div>
                    </div>                                         
                    <div className="col-3 pt-4 ">
                        <div className="d-flex justify-content-end bg-orange">
                            <img 
                                src="https://www.flaticon.com/svg/static/icons/svg/535/535234.svg"
                                alt="Heart"
                                height="30"
                                className="mr-4"
                            />
                            <span className="bg-warning mb-4 px-3 py-2 rounded-circle mr-4">3</span>                           
                            <img 
                                src="https://www.flaticon.com/svg/static/icons/svg/848/848006.svg" 
                                alt="avatar"
                                height="40"
                                className="mr-2"
                            />
                        </div>
                    </div>                            
            </Fragment>
          )
      }
}


export default Navigation;


