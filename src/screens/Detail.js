import React, { Component } from 'react'
import DetailUser from '../components/DetailUser'
import '../assets/css/detail.css'
import FooterPageDua from '../components/FooterPageDua';
import BodyLazmall from '../components/BodyLazmall';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProduk: props.dataProduk,
            params: props.params,
            produk: null,
            pembelian: {},
            foto: null,
            jumlah: 1
        }
    }
    componentWillMount() {
        this.state.dataProduk.forEach(element => {
            if (element.id == this.state.params) {
                this.setState({
                    produk: element,
                    foto: element.url[0]
                })
            }
        });
    }

    setFoto = (fotoBaru) => {
        this.setState({
            foto: fotoBaru
        })
    }
    setJumlah = (newJumlah) => {
        this.setState({
            jumlah: newJumlah
        })
    }
    render() {
        window.scrollTo(0, 0);
        return (
            <div>
                <div className="container-fluid detail">
                    <DetailUser cart={this.props.cart} changeJumlah={this.props.changeJumlah} addToCart={this.props.addToCart} id={this.props.params} foto={this.state.foto} produk={this.state.produk} setFoto={this.setFoto} jumlah={this.state.jumlah} setJumlah={this.setJumlah} />

                </div>
                <div className="mt-4">
                    <BodyLazmall />
                </div>
                <div className="container-fluid detail">
                    <FooterPageDua />
                </div>
            </div>
        )

    }
}
export default Detail