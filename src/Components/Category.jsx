import '../style.css';
import React, { Component } from 'react';
import { Fragment } from 'react';


class Category extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
          categories: '',
        };
      }
      // eslint-disable-next-line
      getAllCategories() {
        return fetch(`${this.state.base_url}category/all`)
          .then(response => response.json())
          .then(responseJson => {
            this.setState({ categories: responseJson.data });
          })
          .catch(error => 'error')
      }
    
    
      componentDidMount() {
        this.getAllCategories();
        console.log(this.state.categories);
      }
    
      onClickHandler = (e) => {
        this.props.popular(e);
      }

    render(){
        return(
            <Fragment>
                <div className=" category-menu row pt-4 col-12">                    
                    <div className="row d-flex justify-content-between col-12">
                        <p className="ml-4 category-text">Kategori</p>
                        <button className="tombol px-3"> lebih lengkap</button>
                    </div>
                    <div className="row d-flex justify-content-between">                    
                    {
                        this.state.categories ? this.state.categories.map(item =>
                        <div key={item.id} className="col-3" onClick={_ => this.onClickHandler(item.id)}>
                            <img src={item.img} alt="" />
                            <p className="title">{item.name}</p>
                        </div>
                        ) : <br/>
                    }    
                    </div>                               
                </div>
            </Fragment>
        )
    }
}
export default Category