import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating'



export default function component2({film}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={film.image} />
    <Card.Body>
      <Card.Title> {film.Title} </Card.Title>
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
