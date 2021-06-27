import React from 'react'
import './ShoppingCart.css'
import {connect} from 'react-redux';
import {putPlusItem3000Port, putMinusItem3000Port, onChangeCounter} from '../../actions';


class ShoppingCart extends React.Component{
    
    plus = (id, sushiName, weight, price, counter) => {
        this.props.putPlusItem3000Port(id, sushiName, weight, price, counter)
    }
    
    minus = (id, sushiName, weight, price, counter) => {
        this.props.putMinusItem3000Port(id, sushiName, weight, price, counter)
    }
        render(){
        const {card} = this.props
        const {id, url, weight, sushiName, counter, price} = card
        console.log({card})

        return(
        <div className="cart-item" id={id}>
            <div className="cart-item__top">
                <div className="cart-item__img">
                    <img src={url} alt=""/>
                </div>
                <div className="cart-item__desc">
                    <div className="cart-item__title">{sushiName}</div>
                    <div className="cart-item__weight">{weight}</div>
                    <div className="cart-item__details">
        
                        <div className="items items--small counter-wrapper">
                            <div className="items__control" 
                                onClick={() => this.minus(id, sushiName, weight, price, counter)}
                            >-</div>
                            <div className="items__current" >{counter}</div>
                            <div className="items__control" 
                                onClick={() => this.plus(id, sushiName, weight, price, counter)}
                            >+</div>
                        </div>
        
                        <div className="price">
                            <div className="price__currency">{price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addCounter: state.addCounter,
        addPrice: state.addPrice,
    }
}
const mapDispatchToProps = {
    putPlusItem3000Port,
    putMinusItem3000Port,
    onChangeCounter,
   
}
export default connect (mapStateToProps, mapDispatchToProps)(ShoppingCart)

