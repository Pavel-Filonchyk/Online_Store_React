import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './ShoppingCart.css'
import ShopList from './ShopList/ShopList';
import {onShowMain} from '../../actions';

class ShoppingCart extends React.Component{
    onShowMain = () => {
        this.props.onShowMain()
    }
    render(){
        const {elems, totalPrice} = this.props

        const cardNames = elems.flat().map(card =>{
            return (<ShopList
                card={card}
                key={card.id} 
            />)
        })
        return(
            <section className="shopping_cart">
                <div className="wrap_btn_back">
                    <Link className="link" to="/Main/">
                        <div className="back_to_main"
                            onClick={this.onShowMain()}
                        >
                            <h4 className="btn_to_shopping">Back to shopping</h4>
                        </div>
                    </Link>
                </div>
                {cardNames}
                <div className="total_price">
                    <h4 className="text_total_price" style={{marginBlockStart: 0, marginLeft: 30, marginTop:25,}}>Total price: {totalPrice}$</h4>
                </div>
                <div className="block_checkout">
                    <Link className="link" to="/Checkout/">
                        <div className="btn_to_checkout">
                            <h4 style={{marginBlockStart: 0}}>Proceed to checkout</h4>
                        </div>
                    </Link>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        elems: state.elems,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = {
   onShowMain
}
export default connect (mapStateToProps, mapDispatchToProps)(ShoppingCart)


