import React, { useState } from 'react'
import smallImg1 from "./images/sm-1.png"
import smallImg2 from "./images/sm-2.png"
import smallImg3 from "./images/sm-3.png"
import smallImg4 from "./images/sm-4.png"

function Card() {
   
    const [btnText , setBtnText] = useState("Select")
    const changeTextHandler = () => {
        setBtnText("Selected")
    }

    const imgs = [
        {id:0 , value:[smallImg1]},
        {id:1 , value:[smallImg2]},
        {id:2 , value:[smallImg3]},
        {id:3 , value:[smallImg4]},
    ]
   
    const [imgChange , setImgChange] = useState(imgs[0])
const imgHandle = (index) =>{
    const selectImage = imgs[index]
    setImgChange(selectImage)
}

  return (
   <>
  <div className='card-flex'>


 
        <div className='card card-image'>
            <div className='card-bg' >
            <img src={imgChange.value} alt="" />
            </div>
            <div className='half-card'></div>
            <div className='card-details'>
            <h4>jade</h4>
            <h5>singer</h5>
            <p className='card-details-p1'>New Delhi</p>
            <p className='card-details-p2'>Event Booking</p>
            </div>
            <div className='inside-card-flex'>
            <div className='inside-card-pic inside-card'>
               {
                imgs.map((data , i)=>{
                    return <img src={data.value} key={data.id} onClick={()=>imgHandle(i)} alt="sm1" />
                })
               }
            </div>
            </div>
            <div className='card-button' onClick={changeTextHandler}>{btnText}</div>
        </div>


 
        




        </div>
        </>
    
  )
}

export default Card