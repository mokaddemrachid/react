import axios from "axios";
import { GET_PRODUCT } from "./actionType/ProductType";
import Swal from 'sweetalert2';

export const get_product=()=>async(dispatch)=>{
    try {
        await axios.get(`https://www.harmonystore01.com/api/get_All_product`)
        .then((res) =>{
            dispatch({type:GET_PRODUCT,payload:res.data})
        })
        
    } catch (error) {      
    }
}
export const add_product=(data)=>async(dispatch)=>{
    try {
        await axios.post(`https://www.harmonystore01.com/api/Create_product`,data)
        .then((res) =>{
            dispatch(get_product())
        
        if (res.data==="poste done"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })         
    }
          catch (error) {        
    }
}

export const delete_product=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`https://www.harmonystore01.com/api/delete/product/ ${id}`)
        .then((res) =>{
            dispatch(get_product())
        
        if (res.data==="product deleted"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'The product has been deleted',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })         
    }
          catch (error) {        
    }
}

export const update_product=(id,data)=>async(dispatch)=>{
    try {
        await axios.put(`https://www.harmonystore01.com/api/update/product/${id}`,data)
        .then((res) =>{
            dispatch(get_product())
        
        if (res.data==="Product updated"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'The product has been updated',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })         
    }
          catch (error) {        
    }
}