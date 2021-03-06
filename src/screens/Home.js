import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import FooterPage from '../components/FooterPage';

class Home extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <div style={{ paddingTop: 105 }}>
                <Header />
                <Body />
                <FooterPage />
            </div>
        )
    }
}
export default Home