import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: '',
      item: null,
    };
  }
  
  componentDidMount() {
    this.setState({
      item: this.props.item
    })
    console.log(this.props.item);
  }

  componentDidUpdate(props) {
    if (this.props.item !== props.item) {
      console.log(props);
      this.setState({
        item: this.props.item
      })
    }
  }

  onClickHandler = e => {
    const input = document.querySelector('.number');
    let total = parseInt(input.value);


    if (e === '+') {
      if (this.state.item.jumlah === 0) {
        return;
      }
      this.setState({
        item: {
          name: this.state.item.name,
          harga: this.state.item.harga,
          waktu: this.state.item.waktu,
          jumlah: this.state.item.jumlah - 1,
          rating: this.state.item.rating,
          image: this.state.item.image,
          pesan: this.state.item.pesan + 1
        }
      });
      input.value = `100`;
      return;
    }

    if (this.state.item.pesan === 0) {
      return;
    }
    input.value = total - 1;
    this.setState({
      item: {
        name: this.state.item.name,
        harga: this.state.item.harga,
        waktu: this.state.item.waktu,
        jumlah: this.state.item.jumlah + 1,
        rating: this.state.item.rating,
        image: this.state.item.image,
        pesan: this.state.item.pesan - 1
      }
    });

  }

  onOrderHandler = e => {
    this.props.onOrderHandler(this.state.item);
    console.log(this.state.item);
  }

  render() {
    return (
      <div className="modal fade" id="pesanModal" tabIndex="-1" aria-labelledby="pesanModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body d-flex justify-content-center flex-column">
              <img src={this.state.item ? this.state.item.image : 'https://belajar-react.smkmadinatulquran.sch.id/image/masakan1.jpg'} className="img-modal " alt=""/>
              <h3 className="">{this.state.item ? this.state.item.name : ''}</h3>
              <div className="wrap  d-flex justify-content-start">
                <p className="mr-2 text ">
                    <img 
                    className="mr-2"
                    src="https://www.flaticon.com/svg/static/icons/svg/929/929566.svg" 
                    alt=""
                    height="20"
                    />
                    {this.state.item ? this.state.item.rating : ''}
                </p>
                <p className="text price">Rp. {this.state.item ? this.state.item.harga : ''}</p>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <p className="stock">Stock: {this.state.item ? this.state.item.jumlah : ''}</p>
              <div className="wrap row">
                <button type="button" className="btn btn-orange" onClick={_ => this.onClickHandler('-')}> - </button>
                <input type="text" className="number text text-center" disabled value={this.state.item ? this.state.item.pesan : ''} />
                <button type="button" className="btn btn-orange" onClick={_ => this.onClickHandler('+')}>+</button>
                <button type="button" className="tombol px-2  " data-dismiss="modal" onClick={this.onOrderHandler}>Pesan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;