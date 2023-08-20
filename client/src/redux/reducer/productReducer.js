import { GET_PRODUCT } from "../actionType/ProductType"

const initialState={
    product:[]
}
 const get_product = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_PRODUCT:
            return {...state,product:payload}
        default:
            return state
    }
}
export default get_product