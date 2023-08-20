import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
// import { Rating } from 'react-simple-star-rating'
import Component4 from './AddProduct';
import { useState } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { delete_product } from '../redux/productAction';



// onClick={()=>navigate(`/movies/${film.id}`)}
export default function Component2({product}) {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  const [productUpdate, setProductUpdate] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setProductUpdate(product)
    setShow(true)
    
  };
const deleteProduct = (id) =>{
  dispatch(delete_product(id))
  // axios.delete(`https://www.harmonystore01.com/api/delete/product/ ${id}`)
  // .then((res) =>{console.log(res)})
}
  return (
  <>
    <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={product.image_url} />
    <Card.Body>
      <Card.Title> {product.product_name} </Card.Title>
      <Card.Text>
      {/* <Rating initialValue={product.rating} precision={0.5} isHalf={true}/> */}
      </Card.Text>
      <Card.Text>
        {product.promo_price >0 ? product.promo_price : product.price} {" "} DT
      </Card.Text>
      <button style={{backgroundColor:"orangered"}} onClick={()=>handleShow(product)}>Edit</button>
      <button style={{backgroundColor:"red"}} onClick={()=>deleteProduct(product.id)}>Delete</button>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  <Component4 show={show} handleClose={handleClose} productUpdate={productUpdate}/>

</>
  )
}
