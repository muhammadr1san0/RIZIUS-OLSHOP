import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Payment from '../components/payment'
import Navbar from '../components/Navbar'
import product from '../database/product'
import CategoryList from '../screens/CategoryList';
import BuatPesanan from '../components/buatPesanan'
import Cart from '../components/Cart'


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduk: product,
      cart: []
    }
  }
  addToCart = (data) => {
    this.state.cart.push(data)
  }
  changeJumlah = (index, data) => {
    this.setState(this.state.cart[index] = data)
  }
  deleteData = (index) => {
    this.setState(this.state.cart.splice(index, 1))
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:idproduk' exact render={(props) => <Detail cart={this.state.cart} changeJumlah={this.changeJumlah} dataProduk={this.state.dataProduk} addToCart={this.addToCart} params={props.match.params.idproduk} />} />
          <Route path='/categoryList/:category' exact render={(props) => <CategoryList dataProduk={this.state.dataProduk} params={props.match.params} />} />
          <Route path='/categoryList/:category/:subcategory' exact render={(props) => <CategoryList dataProduk={this.state.dataProduk} params={props.match.params} />} />
          <Route path='/payment' exact render={() => <Payment cart={this.state.cart} />} />
          <Route path='/cart' exact render={() => <Cart deleteData={this.deleteData} cart={this.state.cart} changeJumlah={this.changeJumlah} />} />
          <Route path='/buatpesanan' exact render={() => <BuatPesanan cart={this.state.cart} />} />
        </div>
      </BrowserRouter>
    )
  }
}



export default Routes