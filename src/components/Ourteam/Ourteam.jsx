import React from 'react'
import image1 from './assets/Rectangle 170.png'
import image2 from './assets/Rectangle 177.png'
import image3 from './assets/Rectangle 178.png'
import image4 from './assets/Rectangle 179.png'
import image5 from './assets/Rectangle 180.png'
import image6 from './assets/Rectangle 181.png'
import image7 from './assets/Rectangle 182.png'
import image8 from './assets/Vector (6).png'
import image9 from './assets/Vector (7).png'
import image10 from './assets/Vector (8).png'


function Ourteam() {
  return (
    <section id='Ourteam' className='w-full h-[1200px]' >
      <div className='w-full h-[156px] bg-[#001F3B] ' ></div>
<div className="h-[1044px] flex-col text-white flex items-center  gap-10 relative ">
    <img className='absolute z-[-1]' src={image1} ></img>
    <h1 className='text-[20px] font-semibold pt-10'>Our team</h1>
    <div className='flex gap-7' >
      <div className='flex flex-col items-center  bg-[#6c8397] h-[364px] w-[387px]' >
        <img className='w-[183px] h-[183px] mt-5' src={image2}></img>
        <h1>KINEM JONES</h1>
        <h2 className='w-[387px] items-center flex justify-center h-[40px] bg-[#001F3B] mt-5 mb-5' >CEO & CFO</h2>
        <div className='flex gap-3' ><img className='h-[24px]' src={image8}/><img className='h-[24px]' src={image9}/><img className='h-[24px]' src={image10}/></div>
      </div>
      
      <div className='flex flex-col items-center  bg-[#6c8397] h-[364px] w-[387px]' >
        <img className='w-[183px] h-[183px] mt-5' src={image3}></img>
        <h1>Cayla D. Dresser</h1>
        <h2 className='w-[387px] items-center flex justify-center h-[40px] bg-[#001F3B] mt-5 mb-5' >Head of marketing</h2>
        <div className='flex gap-3' ><img className='h-[24px]' src={image8}/><img className='h-[24px]' src={image9}/><img className='h-[24px]' src={image10}/></div>
      </div>

      <div className='flex flex-col items-center  bg-[#6c8397] h-[364px] w-[387px]' >
        <img className='w-[183px] h-[183px] mt-5' src={image4}></img>
        <h1>Robert Colon</h1>
        <h2 className='w-[387px] items-center flex justify-center h-[40px] bg-[#001F3B] mt-5 mb-5' >Head of sale</h2>
        <div className='flex gap-3' ><img className='h-[24px]' src={image8}/><img className='h-[24px]' src={image9}/><img className='h-[24px]' src={image10}/></div>
      </div>

    </div>
 <h1 className='text-[20px] font-semibold'>Advisors</h1>
    <div className='flex gap-7' >
      <div className='flex flex-col items-center  bg-[#6c8397] h-[364px] w-[387px]' >
        <img className='w-[183px] h-[183px] mt-5' src={image5}></img>
        <h1>KINEM JONES</h1>
        <h2 className='w-[387px] items-center flex justify-center h-[40px] bg-[#001F3B] mt-5 mb-5' >CEO & CFO</h2>
        <div className='flex gap-3' ><img className='h-[24px]' src={image8}/><img className='h-[24px]' src={image9}/><img className='h-[24px]' src={image10}/></div>
      </div>
      
      <div className='flex flex-col items-center  bg-[#6c8397] h-[364px] w-[387px]' >
        <img className='w-[183px] h-[183px] mt-5' src={image6}></img>
        <h1>KINEM JONES</h1>
        <h2 className='w-[387px] items-center flex justify-center h-[40px] bg-[#001F3B] mt-5 mb-5' >CEO & CFO</h2>
        <div className='flex gap-3' ><img className='h-[24px]' src={image8}/><img className='h-[24px]' src={image9}/><img className='h-[24px]' src={image10}/></div>
      </div>

      <div className='flex flex-col items-center  bg-[#6c8397] h-[364px] w-[387px]' >
        <img className='w-[183px] h-[183px] mt-5' src={image7}></img>
        <h1>KINEM JONES</h1>
        <h2 className='w-[387px] items-center flex justify-center h-[40px] bg-[#001F3B] mt-5 mb-5' >CEO & CFO</h2>
        <div className='flex gap-3' ><img className='h-[24px]' src={image8}/><img className='h-[24px]' src={image9}/><img className='h-[24px]' src={image10}/></div>
      </div>

    </div>
</div>
    </section>
  )
}

export default Ourteam
