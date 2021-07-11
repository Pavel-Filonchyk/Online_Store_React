import React, { Component } from 'react'
import {connect} from 'react-redux';

import {putPlusItem3000Port, putMinusItem3000Port, deleteFrom3000Port, deleteItem, addToCounter, deductFromCounter} from '../../../actions';
import "./ShopList.css"

class ShopList extends Component {
    onPlus = (id) => {
        this.props.addToCounter(id)
        // if add to server
        //this.props.putPlusItem3000Port(id, sushiName, weight, price, counter)
    }
    
    onMinus = (id) => {
        this.props.deductFromCounter(id)
        //this.props.putMinusItem3000Port(id, sushiName, weight, price, counter)
    }
    onDelete = (id) => {
        this.props.deleteItem(id)
        //this.props.deleteFrom3000Port(id)
    }
    render() {
        const {card} = this.props
        const {id, url, weight, sushiName, counter, price} = card
           
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
                            onClick={() => this.onMinus(id, sushiName, weight, price, counter)}
                        >-</div>
                        <div className="items__current" >{counter}</div>
                        <div className="items__control" 
                            onClick={() => this.onPlus(id, sushiName, weight, price, counter)}
                        >+</div>
                    </div>
                    <div className="price_cart">
                        <div className="price_currency">{price}$</div>
                    </div>
                    <div className="cross"
                        onClick={() => this.onDelete(id)}
                    ><i className="fas fa-times"></i></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = {
    putPlusItem3000Port,
    putMinusItem3000Port,
    deleteFrom3000Port,
    deleteItem,
    deductFromCounter,
    addToCounter
}
export default connect (mapStateToProps, mapDispatchToProps)(ShopList)