import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getFrom3001Port, postTo3000Port, loader, loader3000, onPlus, onMinus, onHideMain, addToCart} from '../../actions';
import './Main.css'


class Main extends React.Component{

componentDidMount() {
    this.props.getFrom3001Port()
}
onPlus = (id, price) => {
    this.props.onPlus(id, price) 
}
onMinus = (id) => {
    this.props.onMinus(id)
}
addToCart = (id) => {   
    this.props.addToCart(id)
    //this.props.postTo3000Port(id, sushiName, weight, price, counter)
}
onHideMain = () => {
    this.props.onHideMain()
}
    render(){
        const {items} = this.props
        console.log(items)

        return(
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
                <div className="cart">
                    <Link className="link" to="/ShoppingCart/">
                        <div className="button"
                            onClick={this.onHideMain()}
                        >
                            <h3 style={{margin: 0}}>Your cart</h3>
                        </div> 
                    </Link> 
                </div>
            </div>
                
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        elems: state.elems,
    }
}
const mapDispatchToProps = {
    getFrom3001Port,
    postTo3000Port,
    loader,
    loader3000,
    onMinus,
    onPlus,
    addToCart,
    onHideMain
}
export default connect( mapStateToProps, mapDispatchToProps)(Main)

