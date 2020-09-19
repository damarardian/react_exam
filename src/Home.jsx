import React, { Component } from 'react';
import { Fragment } from 'react';
import Category from './Components/Category';
import Navigation from "./Components/Navigation";
import Logo from './img/react.PNG'
import Populer from './Components/Populer'
import Detail from './Components/Detail'
import './style.css'
import Myorder from './Components/Myorder';


class Home extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          category: '0',
          popular: [],
          base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
          item: null,
          order: {},
        }
      }
    
      popularOnChange = (e) => {
        return fetch(`${this.state.base_url}populer?category_id=${e}`,
          {
            method: 'POST',
          })
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              popular: responseJson.data
            })
          })
          .catch(error => 'error')
      }
    
      handlerModal = (item) => {
        this.setState({
          item: item,
        })
      }
    
      onOrderHandler = data => {
        this.setState({
          order: data
        });
        console.log();
      }
    

      render(){
          return(
            <Fragment>
            <div className="container-fluid">
                <div className="row all">
                    <Navigation/>
                    <div className="row col-12">
                        <div className="col-9 pt-4"> 
                            <div className="row ml-4">
                                <img 
                                 src={Logo} 
                                 alt=""
                                 height="200"
                                 className=""
                                />
                            </div>
                             <Category popular={this.popularOnChange}/>                               
                             <Populer popular={this.state.popular} onShowModal={this.handlerModal}/>                                                               
                        </div>
                        <div className="col-3 bg-light pt-5 ">
                            <Myorder item={this.state.order}/>
                        </div>
                    </div>
                    <Detail item={this.state.item} onOrderHandler={this.onOrderHandler}/>
                </div>                
            </div>
            </Fragment>
          )
      }
}


export default Home;


