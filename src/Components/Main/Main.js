import React from 'react'
import {connect} from 'react-redux';

import ShoppingCart from '../ShoppingCart/ShoppingCart'
import {getFrom3001Port, postTo3000Port, getFrom3000Port, loader, loader3000, onPrice, onPlus, onMinus, onShowCart, onShowMain, addToCart} from '../../actions';
import Logo from './img/LogoRoll.png'
import './Main.css'
import './Media.css'

class Main extends React.Component{

componentDidMount() {
    this.props.getFrom3001Port()
    this.props.getFrom3000Port()
}
onPlus = (id, price) => {
    this.props.onPlus(id, price) 
}
onMinus = (id) => {
    this.props.onMinus(id)
}
addToCart = (id, sushiName, weight, price, counter) => {   
    this.props.addToCart(id)

    //this.props.postTo3000Port(id, sushiName, weight, price, counter)
}
onShowCart = () => {
    this.props.onShowCart()
}
onShowMain = () => {
    this.props.onShowMain()
}
    render(){
        const {items, elems, showCart, totalPrice} = this.props
        console.log(elems)
        console.log(items)

        const cardName = elems.flat().map(card =>{
            return (<ShoppingCart
                card={card}
                key={card.id} 
            />)
        })

    let cart = ""
    let main = ""
    if(showCart === true){
      cart = 
        (<div>
          {cardName}
        </div>);
    }else{
        main = 
        (<div>
             <div className="wrap_card">
                <h1 style={{margin: 10}}>Sushi delivery</h1>
                <h3 style={{margin: 5, marginBottom: 15}}>Promptly and tasty</h3>
                    {
                    items.map((item) =>{ 
                        return (
                    <div key={item.id} >
                    <div className="card">
                        <img className="product-img" src={item.url} alt=""/>
                            <h3 style={{margin: 15}}>{item.sushiName}</h3>
                            <p style={{margin: 10, marginBottom: 20}}>{item.amount} pcs.</p>
                                <div className="items">
                                    <div className="items__control" data-action="minus"
                                        onClick={() => this.onMinus(item.id, item.price)}
                                    >-</div>
                                    <div className="items__current" data-counter>
                                        <div>{item.counter}</div>
                                    </div>
                                    <div className="items__control" data-action="plus"
                                        onClick={() => this.onPlus(item.id, item.price)}
                                    >+</div>
                                </div>
                                <div className="price">
                                    <div className="price__weight">{item.weight}g.</div>
                                    <div className="price__currency">{item.price}$</div>
                                </div>
                                <button type="button" className="btn"
                                onClick={()=> this.addToCart(item.id, item.sushiName, item.weight, item.price, item.counter)}
                            >+ add to cart</button>
                        </div>
                    </div>   
                    )
                })
                }  
            </div> 
            <div className="cart">
                    <div className="button"
                        onClick={this.onShowCart}
                    >
                        <h3 style={{margin: 0}}>Your cart</h3>
                    </div>
                </div>
        </div>)
    }

        return(
            <>
                <div className="wrapper_logo">
                    <div className="logo" style={{background: `url(${Logo}) center center/cover no-repeat`, height: "100px", width: "100px"}}></div>
                </div>
                <div className="wrapper d-flex flex-column">  
                    {main}
                </div>
                <div className = "shopping_cart">
                    <div className="wrap_btn_back">
                        <div className="back_to_main" style={{ display: showCart ? "block" : "none"}}
                            onClick={this.onShowMain}
                        >
                            <div className="btn_to_shopping">
                                <h4 style={{marginBlockStart: 0, marginBlockEnd: 0}}>Back to shopping</h4>
                            </div>
                        </div>
                    </div>
                    <div className="block_checkout" style={{ display: showCart ? "block" : "none"}}>
                        <div className="btn_to_checkout">
                            <h4 style={{marginBlockStart: 0}}>Proceed to checkout</h4>
                        </div>
                    </div>
                    {cart}
                    <div className="wrap_total_price" style={{ display: showCart ? "block" : "none"}}>
                        <div className="total_price">
                            <h4 className="text_total_price" style={{marginBlockStart: 0, marginLeft: 30, marginTop:25,}}>Total price: {totalPrice}$</h4>
                        </div>
                    </div>
                </div>
            </>

        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        elems: state.elems,
        totalPrice: state.totalPrice,
        mainCounter: state.mainCounter,
        showCart: state.showCart
    }
}
const mapDispatchToProps = {
    getFrom3001Port,
    postTo3000Port,
    getFrom3000Port,
    loader,
    loader3000,
    onPrice,
    onMinus,
    onPlus,
    onShowCart,
    onShowMain,
    addToCart
}
export default connect( mapStateToProps, mapDispatchToProps)(Main)