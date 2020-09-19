import React, { Component } from 'react';
import { Fragment } from 'react';
import Gambar from '../img/pizza.jpg'

class Myorder extends Component{

    constructor(props) {
        super(props);
        this.state = {
          list: [],
          total: 0,
        };
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.item !== this.props.item) {
          console.log(this.props.item.pesan);
          console.log(this.props.item.harga);
    
          const total = this.props.item.pesan * this.props.item.harga;
    
          this.setState({
            list: [...this.state.list, this.props.item],
            total: this.state.total + total
          });
          console.log(this.state.total);
        }
      }
    render(){
        return(
            <Fragment>
                <div className="wrap ATM">
                            <h2 className="h3 mb-2 text">Pesanan Saya</h2>
                            <div className="card p-3 mb-4">
                                <p className="name">Damar ardian alfirisky</p>
                                <p className="saldo">Rp. 100.000.000,00-</p>
                                <p className="card-number mb-0">0035505439</p>
                            </div>
                            <div className="calculate p-3">                                                               
                            {
                                this.state.list ? this.state.list.map((item, i) =>
                                <div key={i} className="items d-flex justify-content-between align-items-center mb-3">
                                    <img src={item.image} width="80" />
                                    <p className="mb-0">{item.pesan}</p>
                                    <p className="mb-0">x</p>
                                    <p className="mb-0">Rp. {item.harga * item.pesan}</p>
                                </div>
                                ) : ''
                            }                                
                                <div className="items d-flex justify-content-between align-items-center ">
                                    <div className="wrap">
                                        <img 
                                            src="https://www.flaticon.com/svg/static/icons/svg/1670/1670915.svg" 
                                            alt=""
                                            height="40"
                                            />
                                    </div>
                                    <p className="mt-4 text">Sabang - Merauke</p>
                                    <p className="mt-4 text">1.000,00-</p>
                                </div>
                            </div>
                            <div className="total p-3 d-flex justify-content-between align-items-center">
                                <p className="mb-0 text">Total:</p>
                                <p className="mb-0 total text">RP. {this.state.total}</p>
                            </div>
                            <div className="order-submit p-3 w-100">
                                <button className="btn w-100 ">Pesan</button>
                            </div>
                        </div>
            </Fragment>
        )
    }
}

export default Myorder