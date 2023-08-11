import Component1 from "./components/component1";
import NavScrollExample from "./components/component3";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import React from "react";
// import { useEffect ,useState } from "react";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom"
import Trailer from './components/trailer'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
      this.state = {
        search:"",
    data:[
          {id:1,title:"Night and day",rating:3,image:"https://fr.web.img4.acsta.net/medias/nmedia/18/77/54/90/19481499.jpg",date:"2010", description:"Tom Cruise and Cameron Diaz star in the action-comedy KNIGHT AND DAY. During their glamorous and sometimes deadly adventure, nothing and no one  even the now fugitive couple  are what they seem. Amid shifting alliances and unexpected betrayals, they race across the globe, with their survival ultimately hinging on the battle of truth vs. trust.", trailer:"https://www.youtube.com/watch?v=JGPl86DBNNs&t=54s"},
          {id:2,title:"The man from toronto",rating:3.5,image:"https://m.media-amazon.com/images/M/MV5BZDM2YjA2ZjAtMmZmMy00NDhjLWJjYWYtYjc4ZGY0YzUzOTMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",date:"2022", description:"A case of mistaken identity arises after a screw-up sales consultant and the world’s deadliest assassin—known only as The Man from Toronto— run into each other at a holiday rental. Kevin Hart and Woody Harrelson star in this action packed comedy only on Netflix 6/24.", trailer:"https://www.youtube.com/watch?v=urqy8DrcGBs"},
          {id:3,title:"The dark knight rises",rating:4.5,image:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",date:"2012", description:"The Dark Knight Rises is the epic conclusion to filmmaker Christopher Nolan's Batman trilogy. Leading an all-star international cast, Oscar(R) winner Christian Bale The Fighter again plays the dual role of Bruce Wayne/Batman. The film also stars Anne Hathaway, as Selina Kyle; Tom Hardy, as Bane; Oscar(R) winner Marion Cotillard La Vie en Rose, as Miranda Tate; and Joseph Gordon-Levitt, as John Blake. Returning to the main cast, Oscar(R) winner Michael Caine The Cider House Rules plays Alfred; Gary Oldman is Commissioner Gordon; and Oscar(R) winner Morgan Freeman Million Dollar Baby reprises the role of Lucius Fox.", trailer:"https://www.youtube.com/watch?v=g8evyE9TuYk"},
          {id:4,title:"No escape",rating:4.5,image:"https://m.media-amazon.com/images/I/91ivhnJvpaL._AC_UF894,1000_QL80_.jpg",date:"2015", description:"An intense international thriller, NO ESCAPE centers on an American businessman (Wilson) as he and his family settle into their new home in Southeast Asia. Suddenly finding themselves in the middle of a violent political uprising, they must frantically look for a safe escape as rebels mercilessly attack the city. Directed by John Erick Dowdle and written together with his brother Drew, NO ESCAPE stars Owen Wilson, Pierce Brosnan and Lake Bell.", trailer:"https://www.youtube.com/watch?v=DOjj07EuO50"},
          {id:5,title:"The highwaymen",rating:3.5,image:"https://www.musiconvinyl.com/fotos/4231_foto1_product_xl.jpg?0c223b0be1df3a48c6ec85f44a4525e8",date:"2019", description:"THE HIGHWAYMEN follows the untold true story of the legendary lawmen who brought down Bonnie and Clyde. When the full force of the FBI and the latest forensic technology aren’t enough to capture the nation’s most notorious criminals, two former Texas Rangers (Kevin Costner and Woody Harrelson) must rely on their gut instincts and old school skills to get the job done. THE HIGHWAYMEN also stars Kathy Bates, John Carroll Lynch, and Kim Dickens.", trailer:"https://www.youtube.com/watch?v=aH6vC-BBKOc"},
          {id:6,title:"Catch me if you can",rating:5,image:"https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg",date:"2002", description:"Frank Abagnale, Jr. (Leonardo DiCaprio) worked as a doctor, a lawyer, and as a co-pilot for a major airline -- all before his 18th birthday. A master of deception, he was also a brilliant forger, whose skill gave him his first real claim to fame: At the age of 17, Frank Abagnale, Jr. became the most successful bank robber in the history of the U.S. FBI Agent Carl Hanratty (Tom Hanks) makes it his prime mission to capture Frank and bring him to justice, but Frank is always one step ahead of him.", trailer:"https://www.youtube.com/watch?v=s-7pyIxz8Qg"}, 
        ]
      }
  }
   handleChange(event){
       this.setState({search:event.target.value});
  }
  componentDidMount(){
    const {data} = this.state
    var newMovie=JSON.parse(localStorage.getItem("data"))
    if(newMovie){
    this.setState({data:[...data,newMovie]})
  }}
  render() {
    const {data, search }= this.state
    return (
      <div className="App">
      <header className="App-header">
      <NavScrollExample handleChange={()=>this.handleChange()} />
      
        <Routes>
        
          <Route path="/" element={<Home/>}></Route>
        
          <Route path="/movie" element={<Component1 films={data} search={search} />}></Route>
          <Route path="/movies/:id" element={<Trailer films={data}/>} />
       
        </Routes>
   
      
       
      </header>
    </div>
    )
  }
}


// function App() {
//   const [search,setSearch]=useState("");

//   const [data,setData]=useState([
//     {id:1,title:"Night and day",rating:3,image:"https://fr.web.img4.acsta.net/medias/nmedia/18/77/54/90/19481499.jpg",date:"2010"},
//     {id:2,title:"The man from toronto",rating:3.5,image:"https://m.media-amazon.com/images/M/MV5BZDM2YjA2ZjAtMmZmMy00NDhjLWJjYWYtYjc4ZGY0YzUzOTMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",date:"2022"},
//     {id:3,title:"The dark knight rises",rating:4.5,image:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",date:"2012"},
//     {id:4,title:"No escape",rating:4.5,image:"https://m.media-amazon.com/images/I/91ivhnJvpaL._AC_UF894,1000_QL80_.jpg",date:"2015"},
//     {id:5,title:"The highwaymen",rating:3.5,image:"https://www.musiconvinyl.com/fotos/4231_foto1_product_xl.jpg?0c223b0be1df3a48c6ec85f44a4525e8",date:"2019"},
//     {id:6,title:"Catch me if you can",rating:5,image:"https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg",date:"2002"}, 
//   ])
//   const handleChange = (event) => {
//     setSearch(event.target.value);
//   }
//   useEffect(()=>{
//     var newMovie=JSON.parse(localStorage.getItem("data"))
//     if(newMovie){
//     setData([...data,newMovie])
//     }
//   },[data])
//   return (
//     <div className="App">
//       <header className="App-header">
//       <NavScrollExample handleChange={handleChange} />
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/movie" element={<Component1 films={data} search={search} />}></Route>
//       </Routes>
      
       
//       </header>
//     </div>
//   );
// }

// export default App;
