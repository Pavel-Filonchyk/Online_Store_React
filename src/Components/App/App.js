import React, {Component} from 'react'
import {Route,  Switch} from 'react-router-dom'
import {connect} from 'react-redux';

import Main from '../Main/Main';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Checkout from '../Checkout/Checkout';
import Logo from '../Main/img/LogoRoll.png'


class App extends Component {
   
    render() {
        const {show} = this.props
        return (
            <div>
                <header className="logo">
                    <div className="logo" style={{background: `url(${Logo}) center center/cover no-repeat`, height: "90px", width: "90px"}}></div>
                </header>
                <section className="main" style={{display: show ? "block" : "none"}}>
                    <Main/>
                </section>
                <Switch>
                    <Route path="/Main" exact component={Main}/>
                    <Route path="/ShoppingCart" exact component={ShoppingCart}/>
                    <Route path="/Checkout" exact component={Checkout}/>
                </Switch>
            </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return {
       show: state.show
    }
}
export default connect (mapStateToProps)(App)

