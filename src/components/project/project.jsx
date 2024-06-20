import React from 'react'
import './project.css'
import Data from '../../assets/mywork_data'
import Arrow from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div id="Projects" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
        <hr/>
      </div>
         <div className="mywork-container">
       {
       Data.map((work,index)=>{
        return  <img key={index}src={work.w_img} alt="" width="400px"  className="Image"/>
       })
       }

         </div>
         
    </div>
  )
}

export default Project;