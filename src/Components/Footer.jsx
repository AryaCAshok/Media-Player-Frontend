import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
 <>
 <div className='d-flex justify-content-center align-items-center mt-5'>
  <div className='footer d-flex align-item-center justify-content-evenly'>
   <div className='website' style={{width:"400px"}}>
    <h5><i class="fa-solid fa-video text-warning me-2"></i>Media Player</h5>
    <p style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quisquam dolorum rem quidem sequi assumenda inventore ut molestias minus molestiae, officiis ex omnis consectetur velit tempora ipsum, id laboriosam placeat?</p>
   </div>
   <div className='links d-flex flex-column ms-5'>
    <h4>Links</h4>
    <Link to='/' style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
    <Link to='/home' style={{textDecoration:"none",color:"white"}}>Home Page</Link>
    <Link to='/watch' style={{textDecoration:"none",color:"white"}}>Watch History</Link>
   </div>
   <div className='guides d-flex flex-column ms-5'>
    <h4>Links</h4>
    <Link to='https://react.dev/'target='_blank' style={{textDecoration:"none",color:"white"}}>React</Link>
    <Link to='/home' style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
    <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none",color:"white"}}>Boots Watch</Link>
   </div>
     <div className='Contat Us ms-5'>
      <h4>Contact Us</h4>
      <div className='d-flex'>
      <input type="text" className='form-control' placeholder='Enter your Email ID' />
      <button className='btn btn-warning ms-3'>Subscribe</button>
     </div>
     <div className='d-flex align-iten-center mt-3 justify-content-evenly fa-2x'>
      <Link to='https://www.facebook.com/'><i class="fa-brands fa-facebook "></i></Link>
      <Link to='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></Link>
      <Link to='https://twitter.com/login'><i class="fa-brands fa-square-twitter"></i></Link>
      <Link to='https://twitter.com/login'><i class="fa-brands fa-linkedin"></i></Link>
     </div>
     </div>
  </div>
  
 </div>
 <p className='mt-5 text-center'>Copyright  &copy; 2023 Media Player . Build with React</p>
 </>
  )
}

export default Footer