import React from 'react'
import image1 from './assets/Group 2.png'
import face from './assets/Vector (2).png'
import twitter from './assets/Group 34.png'
import google from './assets/Group 33.png'

function Footer() {
  return (
<>
<footer className='bottom-0 relative' >
    <div className='bg-[#0A3255]  px-4 h-[400px] flex-col  justify-evenly lg:px-6 pt-[100px] ' >
        <div className='flex flex-wrap px-[90px] h-[210px] gap-[90px] mx-auto border-b-2 border-grey  max-w-screen-xl' >
            <div className='w-[406px] text-white h-[300px]' >
                <img src={image1} className='mr-3 w-[173px] h-[50px]  ' ></img>
             <h2 className='text-[25px] font-semibold mt-2' >Don't miss out, Stay updated</h2>
             <p className='text-[18px]' >Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally</p>
            </div>
            <div className='flex  ' >
                <div className= 'flex items-center w-[600px] h-[200px] outline-none gap-5'>
                    <i class="fa-brands fa-facebook text-white"></i>
                    <input className='w-[400px] rounded-lg bg-slate-500 outline-none text-[30px] border-0 h-[58px] pl-10' placeholder='Email Address' ></input>
                    <button className='w-[197px] h-[58px] bg-white text-black text-[30px]  font-semibold rounded-lg'>Subscribe</button>
                </div>
            </div>
        </div>  
        <div>
            <div className='px-[150px] text-white mt-[30px] flex justify-between '>
          <p>© Copyrights 2020 All rights reserved. Made with  CodestarThemes</p>
          <div className='flex gap-5 '>
          <img className='w-7 h-7'  src={face} ></img>
          <img className='w-7 h-7' src={twitter}></img>
          <img className='w-7 h-7' src={google}></img>
          </div>
            </div>
        </div>
    </div>
</footer>
</>
  )
}

export default Footer
