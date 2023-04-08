import React from 'react'
import Images from './Images'

const ImgRender = ({img}) => {
    const imgages = img.map((imgs,index)=>{
        return<Images img={imgs} key={index}/>
    })
    
  return (
    <div>
       {imgages}
      
    </div>
  )
}

export default ImgRender
