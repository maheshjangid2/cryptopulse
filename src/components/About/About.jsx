import React from 'react'
import image1 from './assets/Group100.png'
import image2 from './assets/Group 267.png'
import image3 from './assets/Group 269.png'

function About() {
  return (
   <>
   <section id='About' className='flex flex-col' >
   <div className="w-full  gap-24 justify-center  flex-row flex h-[480px] bg-[#0A3255]">
    <img className='w-[180px]  h-auto mb-96 pt-10 absolute mr-[1200px] ' src={image1}></img>
    <img className='h-[500px] ml-[660px]  pt-10 w-500px absolute' src={image2}></img>
  <div className='flex flex-col relative w-[600px] pt-[150px] h-[600px] text-white' >
    <h1 className='text-[45px]'>The World’s 1st ICO Platform That Offers Rewards</h1>
    <p className='text-[30px]' >The platform helps investors to make easy to purchase and sell their tokens.</p>
  </div>
  <div className='flex flex-col relative pt-[100px] '>
<div className='w-[500px] h-[172px] border-2 flex gap-3 flex-col items-center bg-[#0A3255] border-black bg-transparent'>
  <h1 className='text-white mt-2'>Pre-sale is Live Now</h1>
  <div className='flex gap-5'>
    <div className='flex flex-col items-center '>
    <span className='h-20 w-20 font-semibold flex mb-2 items-center justify-center text-4xl text-white bg-gray-400'>27</span>
    <p className='text-white'>Days</p>
    </div>
     <div  className='flex flex-col items-center '>
     <span className='h-20 w-20 font-semibold flex mb-2 items-center justify-center text-4xl text-white bg-gray-400'>22</span>
     <p className='text-white'>Hours</p>
     </div>
     <div  className='flex flex-col items-center '>
     <span className='h-20 w-20 font-semibold flex mb-2 items-center justify-center text-4xl text-white bg-gray-400'>14</span>
     <p className='text-white'>Minutes</p>
     </div>
     <div  className='flex flex-col items-center '>
     <span className='h-20 w-20 font-semibold flex mb-2 items-center justify-center text-4xl text-white bg-gray-400'>33</span>
     <p className='text-white '>Seconds</p>
     </div>
  </div>
</div>
<p className='text-white mt-10'>$18.090 pledget of $25.000 goal</p>
<div className='w-[500px] h-1.5 rounded-md bg-white mt-4 ' >
  <div className='w-[260px] h-1.5 bg-[#5988be] rounded-md border-1  ' ></div>
</div>
<button className='w-[500px] text-[25px] font-semibold mt-9 h-10 bg-white rounded-md' >Purchase Tokens</button>
  </div>
   </div>


   {/* whyico--------------------------------------------------------- */}
   <div className='h-[800px] text-white w-full flex flex-col  items-center relative bg-[#001F3B] '>
     <h1 className='text-3xl font-semibold mt-6' >WHAT IS ICO CRYPTO</h1>
     <p className='text-2xl mt-3 w-[600px] text-center inline-block'>ICO is the cryptocurrency industry’s equivalent to an initial public offering</p>
     <div className='h-[580px] flex flex-row mt-10' >
      <img className='w-[780px] h-[570px]' src={image3}></img>
      <p className='text-white text-2xl mt-10 w-[380px]'>We’ve built a platform to buy and sell shares</p>
     </div>
    </div>
   </section>
   </>
  )
}

export default About
