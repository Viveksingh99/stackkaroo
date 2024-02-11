import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between px-20 py-5'>
      <div className='bg-black'>
        LOGO
      </div>
      <div className='flex flex-wrap gap-12 bg-[#e6dede] p-5 rounded-full'>
        <div>Home</div>
        <div>About Us</div>
        <div>Work</div>
        <div>Services</div>
        <div>Clients</div>
        <div>Team</div>
        <div>Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar