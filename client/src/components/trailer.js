import React from 'react'
import { useParams } from 'react-router-dom';


export default function Trailer({films}) {
  const {id} = useParams()
  const film = films.find((film) => film.id ===( Number(id)));
  

  // if (!film) {
  //   return <div>Loading...</div>;
  // }
  return (
    
    <div>
      {console.log(film)}
       <h2>{film.title}</h2>
      <p>{film.description}</p>
      <iframe
        width="560"
        height="315"
        src={film.trailer}
        title={`${film.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    
  )
}
