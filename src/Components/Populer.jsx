import React, { Component } from 'react';
import { Fragment } from 'react';
import Semua from '../img/semua.png'


class Populer extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
          popular: '',
          item: '',
        };
      }
    
      getAllPopular() {
        return fetch(`${this.state.base_url}populer/all`)
          .then(response => response.json())
          .then(responseJson => {
            this.setState({ popular: responseJson.data });
          })
          .catch(error => 'error')
      }
    
      onClickHandler = e => {
        this.props.onShowModal(e);
      }
    
    
      componentDidMount() {
        this.getAllPopular();
      }
    
      componentDidUpdate(props) {
        if (props.popular !== this.props.popular) {
          this.setState({ popular: this.props.popular });
        }
      }

    render(){
        return(
            <Fragment>
                <div className="row ml-4 pt-4 d-flex justify-content-between">
                    <p>Popular</p>                                
                </div>
                <div className="row ml-2 pt-4 d-flex content justify-content-between popular">  
                {
                    this.state.popular ? this.state.popular.map((item, i) =>
                    <div key={i} className="col-4 mb-2" >
                        <a href="" className="a-popular" data-toggle="modal" data-target="#pesanModal" onClick={_ => this.onClickHandler(item)}>
                        <div className="card border-0">
                            <div className="img-popular">
                                <img src={item.image} className="img-popular2" alt="" />
                                <p className="time px-4 text">{item.waktu}</p>
                            </div>
                            <div className="card-body">
                                <h4 className="h5 text">{item.name}</h4>
                                <div className="wrapper d-flex">
                                    <p className="mr-2">
                                        <img className="mr-2" src="https://www.flaticon.com/svg/static/icons/svg/929/929566.svg" alt="" height="20"/>
                                     {item.rating}</p>
                                    <p className="text">Rp. {item.harga}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                    ) : ''
                }                                                                                                                                 
                </div>
            </Fragment>
        )
    }
}

export default Populer