import React, {useEffect} from 'react'
import {Route,  Switch} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import Main from '../Main/Main';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Checkout from '../Checkout/Checkout';
import {getFrom3001Port, getFrom3000Port} from '../../actions';
import Logo from '../Main/img/LogoRoll.png'

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFrom3001Port())
    }, [])

    const show = useSelector(state => state.show)

    return (
        <div>
        <header className="logo">
            <div className="logo" style={{background: `url(${Logo}) center center/cover no-repeat`, height: "90px", width: "90px"}}></div>
        </header>
        
        <section className="main">{show ? <Main/> : null}</section>
        <Switch>
            <Route path="/Main" exact component={Main}/>
            <Route path="/ShoppingCart" exact component={ShoppingCart}/>
            <Route path="/Checkout" exact component={Checkout}/>
        </Switch>
    </div> 
    )
}
