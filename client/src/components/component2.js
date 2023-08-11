import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'





export default function Component2({film}) {
  const navigate = useNavigate();
  return (
    
    <Card style={{ width: '18rem' }} onClick={()=>navigate(`/movies/${film.id}`)}>
    <Card.Img variant="top" src={film.image} />
    <Card.Body>
      <Card.Title> {film.title} </Card.Title>
      <Card.Text>
      <Rating initialValue={film.rating} precision={0.5} isHalf={true}/>
      </Card.Text>
      <Card.Text>
        {film.date}
      </Card.Text>
      
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>

  )
}
