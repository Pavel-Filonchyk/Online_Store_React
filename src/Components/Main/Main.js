import React from 'react'
import {connect} from 'react-redux';

import ShoppingCart from '../ShoppingCart/ShoppingCart'
import {getFrom3001Port, postTo3000Port, getFrom3000Port, loader, loader3000, onPrice, addToCounter, deductFromCounter} from '../../actions';
import './Main.css'
import './Media.css'

class Main extends React.Component{

componentDidMount() {
    this.props.getFrom3001Port()
    this.props.getFrom3000Port()
}
onPlus = (id) => {
    this.props.addToCounter(id) 
}
onMinus = (id) => {
    this.props.deductFromCounter(id)
}
addToCart = (id, sushiName, weight, price, counter) => {   
    this.props.onPrice(price, counter)
    this.props.postTo3000Port(id, sushiName, weight, price, counter)
}
    render(){
        const {items, elems, onDisabled} = this.props
        console.log(elems)
        console.log(items)

        const cardName = elems.flat().map(card =>{
        return (<ShoppingCart
            card={card}
            key={card.id} 
        />)
    })
            return(
                <>
                <div className="wrapper d-flex flex-column">  
                    <div className="wrap_card justify-content-center ">
                        {
                        items.map((item) =>{ 
                            return (
                        
                        <div key={item.id} >
                        <div className="first_row d-flex card mb-4 justify-content-center">
                        
                            <img className="product-img" src={item.url} alt=""/>
                            <div className="card-body text-center">
                                <h4 className="item-title">{item.sushiName}</h4>
                                <p><small data-items-in-box className="text-muted">{item.amount} pcs.</small></p>
                                <div className="d-flex flex-column details-wrap_card">
                                    <div className="items counter-wrap_card">
                                        <div className="items__control" data-action="minus"
                                            onClick={() => this.onMinus(item.id, item.counter)}
                                        >-</div>
                                        <div className="items__current" data-counter>{item.counter}</div>
                                        <div className="items__control" data-action="plus"
                                            onClick={() => this.onPlus(item.id, item.counter)}
                                        >+</div>
                                    </div>
                                    <div className="price">
                                        <div className="price__weight">{item.weight}g.</div>
                                        <div className="price__currency">{item.price}$</div>
                                    </div>
                                </div>
                                <button data-cart type="button" className="btn btn-block btn-outline-warning"
                                    onClick={()=> this.addToCart(item.id, item.sushiName, item.weight, item.price, item.counter)}
                                    disabled = {onDisabled}
                                >+ add to cart</button>
                            </div>
                            </div>
                           
                        </div>
                        )
                        })
                    }  
                    </div> 
                </div>
                <div className = "shoppingCart">
                  {cardName}
                </div>
            </>
            ) 
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        elems: state.elems,
        mainCounter: state.mainCounter
    }
}
const mapDispatchToProps = {
    getFrom3001Port,
    postTo3000Port,
    getFrom3000Port,
    loader,
    loader3000,
    onPrice,
    deductFromCounter,
    addToCounter
}
export default connect( mapStateToProps, mapDispatchToProps)(Main)