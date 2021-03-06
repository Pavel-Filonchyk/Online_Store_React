import React from 'react'
import { useDispatch } from 'react-redux';

import {deleteItem, addToCounter, deductFromCounter} from '../../../actions';
import "./ShopList.css"

export default function ShopList({card}) {
    const {id, url, weight, sushiName, counter, price} = card
    const dispatch = useDispatch()

    const onPlus = (id) => {
        dispatch(addToCounter(id))
        // if add to server
        //this.props.putPlusItem3000Port(id, sushiName, weight, price, counter)
    }
    
    const onMinus = (id) => {
        dispatch(deductFromCounter(id))
        //this.props.putMinusItem3000Port(id, sushiName, weight, price, counter)
    }
    const onDelete = (id) => {
        dispatch(deleteItem(id))
        //this.props.deleteFrom3000Port(id)
    }
    return (
    <div className="wrap_cart" id={id}>
        <div className="wrapper_elems">
            <div className="cart-item__img">
                <img src={url} alt=""/>
            </div>
            <div className="cart-item__title">{sushiName}</div>
        </div>
        <div className="wrapper_items">
            <div className="cart-item__weight">{weight}g</div>
            <div className="items items--small counter-wrapper">
                <div className="items__control" 
                    onClick={() => onMinus(id, sushiName, weight, price, counter)}
                >-</div>
                <div className="items__current" >{counter}</div>
                <div className="items__control" 
                    onClick={() => onPlus(id, sushiName, weight, price, counter)}
                >+</div>
            </div>
            <div className="price_cart">
                <div className="price_currency">{price}$</div>
            </div>
            <div className="cross"
                onClick={() => onDelete(id)}
            ><i className="fas fa-times"></i></div>
        </div>
    </div>
    )
}
