import React, { useState } from 'react'
import './style.css';
import SearchBar from './SearchBar';
import axios from "axios";
import ImgRender from './ImgRender';

const App = ()=>{
  const [img, setImg] = useState([])
  const handler = async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers: {
        Authorization : 'Client-ID h14fefIF8LAF5BiQSBUlzK8x1piUjiO2zyusnxDG-cc'
      }},
    )
      
    setImg(response.data.results);
    
    }
  return(
  <>
  <SearchBar onsubmit={handler}/>
  <br/>
  <ImgRender img={img}/>
   </>
   )
}

export default App
