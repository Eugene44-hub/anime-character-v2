// import { useContext } from 'react'
// import { GlobalContext } from '../context/GlobalState'
import Picture from './Picture'
import "./gallery.css"
const Gallery = ({characters,loader,robot}) => {
  // const context=useContext(GlobalContext)
  // const {data}=context.data.data
  // const characters=data.data.data;
const {data}=characters
const {message}=characters
// console.log(characters)
// if(data){
//   console.log(data.length)
// }else{
//   console.log("no data")
// }
// const handleErr=()=>{
//   try
//   { return data.length
 
//  }catch(err){
//    return err
//  }
// }

// handleErr()
  return (
   <>
{message && <h2 style={{textAlign:"center",margin:"auto",flexBasis:"100%"}}>Your search is Limited</h2>}
  {loader?<div className="loader"><img src={robot} alt="loader" /></div>:(
    <>
    {data&&(data.length===0&&(<h1 style={{textAlign:"center",flexBasis:"100%"}}>No Such character</h1>))}
    {/* {!data&&} */}
{/* {message&&<h1>{message}</h1>} */}
{data&&(data.length>0&&( <div style={{display:"flex",justifyContent:"center",padding:"10px"}}>
        <div className="image-gallery">
        {  data&&(data.map(item=>(
                <Picture key={item.mal_id} source={item.images.jpg.image_url} name={item.name} about={item.about} page={item.url} />
            )))
            }
        </div>
     </div>))}
   
     </>

  )}


</>
  
  )


}

export default Gallery