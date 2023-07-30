import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default class component4 extends Component {
  constructor(props){
    super(props)
     this.state={
        id:0,
        title:"",
        rating:0,
        image:"",
        date:""
     }
  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value});
}
   handleSubmit(){
    const {handleClose} = this.props
    const {id, title, rating, image, date} = this.state
   var data={}
   data={
    id:id,
     title:title,
     rating:rating,
     image:image,
     date:date
   }
   localStorage.setItem("data",JSON.stringify(data))
   handleClose()
  }

  render() {
    const {show, handleClose}=this.props
    return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter Title" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control name="id" type="number" placeholder="Enter Id" onChange={(e)=>this.handleChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control name="rating" type="number" placeholder="Enter Rating" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control name="image" type="text" placeholder="Enter Image" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control name="date" type="date" placeholder="Enter Date" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}




// import Form from 'react-bootstrap/Form';

// import React,{ useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Example({show,handleClose}) {
  
// const [id, setId]=useState()
// const [title, setTitle]=useState("")
// const [rating, setRating]=useState()
// const [image, setImage]=useState("")
// const [date, setDate]=useState("")

// const handleSubmit=()=>{
//   var data={}
//   data={
//     id:id,
//     title:title,
//     rating:rating,
//     image:image,
//     date:date
//   }
//   localStorage.setItem("data",JSON.stringify(data))
// }

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Title</Form.Label>
//         <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Id</Form.Label>
//         <Form.Control type="number" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Rating</Form.Label>
//         <Form.Control type="number" placeholder="Enter Rating" onChange={(e)=>setRating(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Image</Form.Label>
//         <Form.Control type="text" placeholder="Enter Image" onChange={(e)=>setImage(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Date</Form.Label>
//         <Form.Control type="date" placeholder="Enter Date" onChange={(e)=>setDate(e.target.value)}/>
//       </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example;