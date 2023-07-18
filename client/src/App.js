import Component1 from "./components/component1";
import NavScrollExample from "./components/component3";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { useState } from "react";

function App() {
  const [search,setSearch]=useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  const data = [
    {id:1,title:"Night and day",rating:3,image:"https://fr.web.img4.acsta.net/medias/nmedia/18/77/54/90/19481499.jpg",date:"2010"},
    {id:2,title:"The man from toronto",rating:3.5,image:"https://m.media-amazon.com/images/M/MV5BZDM2YjA2ZjAtMmZmMy00NDhjLWJjYWYtYjc4ZGY0YzUzOTMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",date:"2022"},
    {id:3,title:"The dark knight rises",rating:4.5,image:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",date:"2012"},
    {id:4,title:"No escape",rating:4.5,image:"https://m.media-amazon.com/images/I/91ivhnJvpaL._AC_UF894,1000_QL80_.jpg",date:"2015"},
    {id:5,title:"The highwaymen",rating:3.5,image:"https://www.musiconvinyl.com/fotos/4231_foto1_product_xl.jpg?0c223b0be1df3a48c6ec85f44a4525e8",date:"2019"},
    {id:6,title:"Catch me if you can",rating:5,image:"https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg",date:"2002"},
    
  ]
  return (
    <div className="App">
      <header className="App-header">
      <NavScrollExample handleChange={handleChange} />
      <Component1 films={data} search={search} />
       
      </header>
    </div>
  );
}

export default App;
