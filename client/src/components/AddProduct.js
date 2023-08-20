import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { add_product, update_product } from '../redux/productAction';

function Component4({ show, handleClose, productUpdate }) {
  const dispatch=useDispatch()
  const [state, setState] = useState({
    Product_material: '',
    product_name: '',
    quantity_in_stock: 1,
    category: '',
    price: 0,
    price_promo: 0,
    description: '',
    image_url: '',
  });

  useEffect(() => {
    if (productUpdate) {
      setState((prevState) => ({
        ...prevState,
        ...productUpdate,
      }));
    }
  }, [productUpdate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const {
      Product_material,
      product_name,
      quantity_in_stock,
      category,
      price,
      price_promo,
      description,
      image_url,
    } = state;
    dispatch(add_product({
      Product_material:Product_material,
      product_name:product_name,
      quantity_in_stock:quantity_in_stock,
      category:category,
      price:price,
      price_promo:price_promo,
      description:description,
      image_url:image_url,
    }),handleClose())

      // .then((res) => {
      //   if (res.data === 'poste done') {
      //     Swal.fire({
      //       position: 'center',
      //       icon: 'success',
      //       title: 'Your work has been saved',
      //       showConfirmButton: false,
      //       timer: 1500,
      //     });
      //     handleClose();
      //   }
      // });
  };

  const handleEdit = () => {
    const { id } = productUpdate || {};
    const {
      Product_material,
      product_name,
      quantity_in_stock,
      category,
      price,
      price_promo,
      description,
      image_url,
    } = state;
    dispatch(update_product(id,{
      Product_material:Product_material,
      category:category,
      description:description,
      image_url:image_url,
      price:  price,
      price_promo:price_promo,
      product_name:product_name,
      quantity_in_stock:quantity_in_stock
    }),handleClose())
      }     

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product_material</Form.Label>
            <Form.Control
              value={state.Product_material}
              name="Product_material"
              type="text"
              placeholder="Enter Product_material"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>product_name</Form.Label>
         <Form.Control value={state.product_name} name="product_name" type="text" placeholder="Enter product_name" onChange={handleChange} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>description</Form.Label>
         <Form.Control value={state.description} name="description" type="text" placeholder="Enter description" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>image_url</Form.Label>
         <Form.Control value={state.image_url} name="image" type="text" placeholder="Enter Image" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>price</Form.Label>
         <Form.Control value={state.price} name="price" type="number" placeholder="Enter price" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>promo_price</Form.Label>
         <Form.Control value={state.price_promo} name="promo_price" type="number" placeholder="Enter promo_price" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>quantity_in_stock</Form.Label>
         <Form.Control value={state.quantity_in_stock} name="quantity_in_stock" type="number" placeholder="Enter quantity_in_stock" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>category</Form.Label>
         <Form.Control value={state.category} name="category" type="text" placeholder="Enter category" onChange={handleChange}/>
       </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={productUpdate ? handleEdit : handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Component4;


// import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
// import Swal from 'sweetalert2'

// export default class Component4 extends Component {
//   constructor(props){
//     super(props)
//      this.state={
//       Product_material:"",
//       product_name:"",
//       quantity_in_stock:1,
//       category:"",
//       price:0,
//       price_promo:0,
//       description:"",
//       image_url:""
//      }
//   }
//   componentDidUpdate(preventprop){
//     const keys = [
//       "Product_material",
//       "product_name",
//       "quantity_in_stock",
//       "price",
//       "price_promo",
//       "description",
//       "category",
//       "image_url",
//     ]
//     keys.forEach((key)=>{
//       if (preventprop.productUpdate?.[key] !== this.props.productUpdate?.[key]){
//         this.setState({[key]:this.props.productUpdate?.[key]})
//       }
//     })

//   }
//   handleChange(event){
//     this.setState({[event.target.name]:event.target.value});
// }
// handleSubmit(){
//   const {handleClose}=this.props
//   const {Product_material, product_name, quantity_in_stock, category, price, price_promo, description, image_url} = this.state
//   axios.post(`https://www.harmonystore01.com/api/Create_product`,{
//     Product_material : Product_material,
//     category : category,
//     description : description,
//     image_url : image_url,
//     price : price,
//     price_promo : price_promo,
//     product_name : product_name,
//     quantity_in_stock : quantity_in_stock,
//   })
//   .then((res) => {
//     if (res.data === "poste done"){
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//       })
//       handleClose()
//     }
//   });
  
// }
// handleEdit(){
//   const {handleClose}=this.props

//   const {id} = this.props.productUpdate?.id
//   const {Product_material, product_name, quantity_in_stock, category, price, price_promo, description, image_url} = this.state
//   axios.put(`https://www.harmonystore01.com/api/update/product/ ${id}`,{
//     Product_material : Product_material,
//     category : category,
//     description : description,
//     image_url : image_url,
//     price : price,
//     price_promo : price_promo,
//     product_name : product_name,
//     quantity_in_stock : quantity_in_stock,
//   }).then((res) => {
//     if (res.data === "Product updated"){
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Product updated',
//         showConfirmButton: false,
//         timer: 1500
//       })
//       handleClose()
//     }
//   })
 
// }

//   //  handleSubmit(){
//   //   const {handleClose} = this.props
//   //   const {id, title, rating, image, date} = this.state
//   //  var data={}
//   //  data={
//   //   id:id,
//   //    title:title,
//   //    rating:rating,
//   //    image:image,
//   //    date:date
//   //  }
//   //  localStorage.setItem("data",JSON.stringify(data))
//   //  handleClose()
//   // }

//   render() {
//     const {show, handleClose, productUpdate} = this.props
//     const {Product_material, product_name, quantity_in_stock, image_url, price, price_promo, category, description} = this.state
//     return (
//       <>
//       <Modal show={show} onHide={handleClose}>
        
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Product_material</Form.Label>
//         <Form.Control value={Product_material} name="Product_material" type="text" placeholder="Enter Product_material" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>product_name</Form.Label>
//         <Form.Control value={product_name} name="product_name" type="text" placeholder="Enter product_name" onChange={(e)=>this.handleChange(e)} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>description</Form.Label>
//         <Form.Control value={description} name="description" type="text" placeholder="Enter description" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>image_url</Form.Label>
//         <Form.Control value={image_url} name="image" type="text" placeholder="Enter Image" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>price</Form.Label>
//         <Form.Control value={price} name="price" type="number" placeholder="Enter price" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>promo_price</Form.Label>
//         <Form.Control value={price_promo} name="promo_price" type="number" placeholder="Enter promo_price" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>quantity_in_stock</Form.Label>
//         <Form.Control value={quantity_in_stock} name="quantity_in_stock" type="number" placeholder="Enter quantity_in_stock" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>category</Form.Label>
//         <Form.Control value={category} name="category" type="text" placeholder="Enter category" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={()=> this.handleClose()}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={productUpdate?()=>this.handleEdit():()=>this.handleSubmit()}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//     )
//   }
// }




// // import Form from 'react-bootstrap/Form';

// // import React,{ useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';

// // function Example({show,handleClose}) {
  
// // const [id, setId]=useState()
// // const [title, setTitle]=useState("")
// // const [rating, setRating]=useState()
// // const [image, setImage]=useState("")
// // const [date, setDate]=useState("")

// // const handleSubmit=()=>{
// //   var data={}
// //   data={
// //     id:id,
// //     title:title,
// //     rating:rating,
// //     image:image,
// //     date:date
// //   }
// //   localStorage.setItem("data",JSON.stringify(data))
// // }

// //   return (
// //     <>
// //       <Modal show={show} onHide={handleClose}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Modal heading</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //         <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Title</Form.Label>
// //         <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
// //       </Form.Group>
// //       <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Id</Form.Label>
// //         <Form.Control type="number" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)} />
// //       </Form.Group>
// //       <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Rating</Form.Label>
// //         <Form.Control type="number" placeholder="Enter Rating" onChange={(e)=>setRating(e.target.value)}/>
// //       </Form.Group>
// //       <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Image</Form.Label>
// //         <Form.Control type="text" placeholder="Enter Image" onChange={(e)=>setImage(e.target.value)}/>
// //       </Form.Group>
// //       <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Date</Form.Label>
// //         <Form.Control type="date" placeholder="Enter Date" onChange={(e)=>setDate(e.target.value)}/>
// //       </Form.Group>
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button>
// //           <Button variant="primary" onClick={handleClose}>
// //             Save Changes
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </>
// //   );
// // }

// // export default Example;