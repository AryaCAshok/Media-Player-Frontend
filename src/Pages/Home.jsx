import React, { useState } from 'react'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'
import Videocard from '../Components/Videocard'
import { useNavigate } from 'react-router-dom'


function Home() {
  // useNavigate(): it is hook used to navigate from one page to another
  const navigateByUrl=useNavigate()
  // create a state for state lifting
  const [uploadVideoStaus,setuploadVideoStaus]=useState()
  return (
 <>
 {/* <Add/>
 <Category/>
 <View/>
 <Videocard/> */}

 <div className='container mt-5 mb-5 d-flex justify-content-between align-item-cnter '>
  <div className='add-videos'>
  <Add setuploadVideoStausToAdd={setuploadVideoStaus}/>
  </div>
<div>
  <h3 style={{fontSize:"30px",cursor:"pointer"}} onClick={()=>navigateByUrl("/watch")}> Watch history</h3>
 
</div>
 </div>
 <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
  <div className='col-md-6 mt-5'>
    <h4>All Videos</h4>
    <View uploadVideoStausToView={uploadVideoStaus}/>
  </div>
  <div>
   <Category/>
  </div>
 </div>
 </>
  )
}

export default Home