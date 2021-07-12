import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {onPlus, onMinus, onHideMain, addToCart} from '../../actions';
import './Main.css'

export default function Main() {
    const items = useSelector(state => state.items)

    const dispatch = useDispatch()

    const isOnPlus = (id, price) => {
        dispatch(onPlus(id, price)) 
    }
    const isOnMinus = (id) => {
        dispatch(onMinus(id))
    }
    const isAddToCart = (id) => {   
        dispatch(addToCart(id))
        //postTo3000Port(id, sushiName, weight, price, counter)
    }
    const isOnHideMain = () => {
        dispatch(onHideMain)
    }
    return (
        <div className="wrap_card">
        <h1 style={{margin: 5}}>Sushi delivery</h1>
        <h3 style={{margin: 5, marginBottom: 15}}>Promptly and tasty</h3>
            {
                items.map((item) =>{ 
                    return (
                <div key={item.id} >
                <div className="card">
                    <img className="product-img" src={item.url} alt=""/>
                        <h3 style={{margin: 5}}>{item.sushiName}</h3>
                        <p style={{margin: 5, marginBottom: 10}}>{item.amount} pcs.</p>
                            <div className="items">
                                <div className="items__control" data-action="minus"
                                    onClick={() => isOnMinus(item.id, item.price)}
                                >-</div>
                                <div className="items__current" data-counter>
                                    <div>{item.counter}</div>
                                </div>
                                <div className="items__control" data-action="plus"
                                    onClick={() => isOnPlus(item.id, item.price)}
                                >+</div>
                            </div>
                            <div className="price">
                                <div className="price__weight">{item.weight}g.</div>
                                <div className="price__currency">{item.price}$</div>
                            </div>
                            <button type="button" className="btn"
                            onClick={()=> isAddToCart(item.id, item.sushiName, item.weight, item.price, item.counter)}
                        >+ add to cart</button>
                    </div>
                </div>   
                )
            })
        } 
        <div className="cart">
            <Link className="link" to="/ShoppingCart/">
                <div className="button"
                    onClick={isOnHideMain}
                >
                    <h3 style={{margin: 0}}>Your cart</h3>
                </div> 
            </Link> 
        </div>
    </div>
    )
}
