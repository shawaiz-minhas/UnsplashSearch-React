import React from 'react'

const Images = ({img}) => {
  return (
    <div>
     <img src={img.urls.regular} alt={img.alt_description} className='images'/>
    </div>
  )
}

export default Images
