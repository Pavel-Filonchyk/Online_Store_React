const initialState = {
    items: [],
    elems: [],
    mainCounter: 0,
    addCounter: 0,
    addPrice: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'LOADER':
        return {
            ...state,
            items: action.payload,
            
        }
        case 'LOADER_3000':
            console.log(state.items)
            return {
                ...state,
                elems: [...state.elems, action.payload]
                
            }   
        case 'ADD_TO_COUNTER': 
            const idx = action.payload
            const itemIndx = state.items.flat().findIndex(item => item.id === idx)
            const itemInState = state.items.flat().find(item => item.id === idx);
            const newItem = {
                ...itemInState,
                counter: ++itemInState.counter,
            }
            return {
                ...state, 
                items: [
                    ...state.items.flat().splice(0, itemIndx),
                    newItem,
                    ...state.items.flat().splice(itemIndx + 1)
                ],
                mainCounter: itemInState.counter
            }
            
        case 'DEDUCT_FROM_COUNTER': 
            const index = action.payload
            const Index = state.items.flat().findIndex(item => item.id === index)
            const itemIntoState = state.items.flat().find(item => item.id === index);
            if (itemIntoState.counter > 1){
                const changedItem = {
                    ...itemIntoState,
                    counter: --itemIntoState.counter
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.flat().splice(0, Index),
                        changedItem,
                        ...state.items.flat().splice(Index + 1)
                    ],
                    mainCounter: itemIntoState.counter
                }
            }
            case 'ON_CHANGE_COUNTER':
            return {
                ...state,
                counter: action.payload,
            }
        case 'PLUS_TO_COUNTER':
            const id = action.payload.id
            const elemInd = state.elems.flat().findIndex(item => item.id === id)
            const elemInState = state.elems.flat().find(item => item.id === id);
            const addPrice = Number(elemInState.counter) * Number(state.addPrice)
            const newElem = {
                ...elemInState,
                counter: ++elemInState.counter,
                price: addPrice
            }
            return {
                ...state, 
                elems: [
                    ...state.elems.flat().splice(0, elemInd),
                    newElem,
                    ...state.elems.flat().splice(elemInd + 1)
                ]
            }
        case 'DELETE_FROM_COUNTER':
            const ind = action.payload.id
            const elemIndex = state.elems.flat().findIndex(item => item.id === ind)
            const elemIntoState = state.elems.flat().find(item => item.id === ind);
            const deletePrice = Number(elemIntoState.price) - Number(state.addPrice)
            if (elemIntoState.counter > 1){
                const changedElem = {
                    ...elemIntoState,
                    counter: --elemIntoState.counter,
                    price: deletePrice
                }
                return {
                    ...state, 
                    elems: [
                        ...state.elems.flat().splice(0, elemIndex),
                        changedElem,
                        ...state.elems.flat().splice(elemIndex + 1)
                    ]
                }
            }
        
        case 'ON_PRICE':
            const price = action.payload
           
            return {
                ...state,
                addPrice: price
            }

        default: 
        return state;  
    }
}
export default reducer;

