import '../../src/index.css'
import  { Bookmark } from 'lucide-react'
function Card(props){
    console.log(props.obj)
    return <>
       <div className="card">
     <div className="top">
       <img src={props.obj.brandLogo} alt="Job Company Logo" />
     </div>
   <div>
       <div className="center">
 <h3> {props.obj.companyName} <span>{props.obj.datePosted}</span></h3>
 <h2>{props.obj.post} </h2>
 <div className='tag'> 
  <h4>{props.obj.tag1}</h4>
  <h4>{props.obj.tag2}</h4>
 </div>
     </div>
   </div>
     <div className="bottom">
     <div>
      <div>
        <h3>{props.obj.pay}</h3>
        <p>{props.obj.location}</p>
      </div> 
     </div>
  <button>Apply Now</button>
     </div>
     </div>
    </>
}

export default Card