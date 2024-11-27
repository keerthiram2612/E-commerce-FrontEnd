import React from 'react'
import "./Scrollimage.css"
export default function ScrollImage() {
    const images = [
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAEprHBPrgPkseLGwVsQtHBn10sr_MbDX3g&s", caption:"Carrot" ,rate:"$4.99-$10.99"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVDsBZQrKO4bVS5R0tOKoO3MWCL-HWti5g&s",caption:"Cabage" ,rate:"$4.99-$10.99"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqTU6P0SA9iv27nIc1um_qptKKZMe8mhAYA&s",caption:"Beans" ,rate:"$4.99-$10.99"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTWnbad3JvOqla_LpgchsO8nznv4Tgancdg&s",caption:"Brinjal" ,rate:"$4.99-$10.99"}
    ]
  return (
    <div className="scroll-content">
        
        <div className='scroll-container'>
        <div className="scroll-wapper">
            {images.map((item,index)=>(
               <div key={index} className="image-container">
               <img src={item.src} alt={`Image ${index + 1}`} className="styled-image" />
               <h3 className="image-caption">{item.caption}</h3>
               <h4 className='image-rate'>{item.rate}</h4>
                <button className='image-btn' onClick={()=> alert(`Clicked on Image ${index+1}`)}>
                    Add to cart
                </button>
             </div>
            ))}
        </div>
      
    </div>
    </div>
  )
}
