import {serverAPI} from './serverAPI/serverAPI'
const getFrom3001Port = () =>{
    return (dispatch) =>{
        serverAPI.getItems()  
        .then((data) => dispatch(loader(data))) 
    }
}
const postTo3000Port = (id, sushiName, weight, price, counter) =>{
    return (dispatch) =>{
        serverAPI.postTo3000Port(id, sushiName, weight, price, counter)  
        .then((data) => dispatch(loader3000(data))) 
    }
}
const getFrom3000Port = () =>{
    return (dispatch) =>{
        serverAPI.getFrom3000Port() 
        .then((data) => dispatch(loader3000(data)))  
    }
}
const putPlusItem3000Port = (id, sushiName, weight, price, counter) =>{
    return (dispatch) =>{
        serverAPI.putPlusItem3000Port(id, sushiName, weight, price, counter) 
        .then((data) => dispatch(onPlus(data))) 
    }
}
const putMinusItem3000Port = (id, sushiName, weight, price, counter) =>{
    return (dispatch) =>{
        serverAPI.putMinusItem3000Port(id, sushiName, weight, price, counter) 
        .then((data) => dispatch(onMinus(data))) 
    }
}
const loader = (data) => {
    return {
        type: 'LOADER',
        payload: data 
    } 
}

const loader3000 = (data) => {
    return {
        type: 'LOADER_3000',
        payload: data 
    } 
}

const onChangeCounter = (counter) =>{
    return {
        type: 'ON_CHANGE_COUNTER', 
        payload: counter
    }
}
const onPrice = (price, counter) =>{
    return {
        type: 'ON_PRICE', 
        payload: price
    }
}

const addToCounter = (id) => {
    return {
        type: "ADD_TO_COUNTER",
        payload: id,
    }
}
const deductFromCounter = (counter) => {
    return {
        type: "DEDUCT_FROM_COUNTER",
        payload: counter
       
    }
}
const onPlus = (data) => {
    return {
        type: "PLUS_TO_COUNTER",
        payload: data
       
    }
}
const onMinus = (data) => {
    return {
        type: "DELETE_FROM_COUNTER",
        payload: data
    }
}

export {
    postTo3000Port,
    getFrom3001Port,
    getFrom3000Port,
    putPlusItem3000Port,
    putMinusItem3000Port,
    loader,
    loader3000,
    onPlus,
    onMinus,
    onChangeCounter,
    addToCounter,
    deductFromCounter,
    onPrice
}