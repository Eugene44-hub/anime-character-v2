import React from 'react'

const Picture = ({source,name,about,page}) => {
    // console.log(`${about.slice(0,200)} ...`)
  return (
    
    <div className='picture'><img src={source} alt="" />
   <div className='card-back'>
    <div className='info'>
    <p>
    Name: {name}
    </p>
    <div>    
    <p>
    {/* About: {about.slice(0,500)}... <br/><a href={page} style={{color:"blue"}}>Read More</a> */}
    </p>
    </div>

    </div>

   </div> 
    </div>
  )
}

export default Picture