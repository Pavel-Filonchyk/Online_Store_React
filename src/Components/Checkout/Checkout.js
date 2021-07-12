import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {onShowMain} from '../../actions'

export class Checkout extends Component {
    onShowMain = () => {
        this.props.onShowMain()
    }

    render() {
        //const {clientElems} = this.props
        //console.log(clientElems)
        const {sushiName, amount, weight, price, counter} = 1//clientElems.elems
        return (
        <section className="checkout">
            <div className="wrap_btn_back">
                <Link className="link" to="/Main">
                    <div className="back_to_main"
                        onClick={this.onShowMain()}
                    >
                        <h4 className="btn_to_shopping">Back to shopping</h4>
                    </div>
                </Link>
            </div>
            <table border="1px" cols="5">
                <tr>
                    <td width="100" height="30"
                        >{sushiName}
                    </td>
                    <td width="100"
                        >{amount}</td>
                    <td width="100"
                        >{weight}</td>
                    <td width="100"
                        >{counter}</td>
                    <td width="100"
                        >{price}</td>
                </tr>
            </table>
        </section>
        
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        clientElems: state.clientElems
    }
}
const mapDispatchToProps = {
    onShowMain
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)

