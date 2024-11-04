import React from 'react'
import image1 from './assets/_Group_.png'
import image2 from './assets/Vector (4).png'
import image3 from './assets/Vector (3).png'
import image4 from './assets/Group 271.png'
import image7 from './assets/Rectangle 140.png'
import image5 from './assets/Chart.png'
import image6 from './assets/Group 44 (1).png'

function Whyico() {
  return (
    <>
    <section id='whyico' className="h-[425px] w-full flex flex-col justify-center gap-10 text-white items-center ">
       <img src={image7} className='w-full z-[-1] h-[425px] absolute' ></img> 
        <h1 className='text-[20px]  font-semibold ' >WHY CHOOSE OUR TOKEN</h1>
        <div className='flex justify-between items-center w-[1200px]  flex-row '>
            <div className='h-[275px] flex flex-col w-[270px]  p-7 gap-2 bg-[#0B3962] text-white '>
            <img className='h-[76px] w-[45px] mt-3' src={image3}/> 
            <h1 className='font-semibold text-[16px]' >Mobile payment make easy</h1>
            <p className='text-[10px]' >You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps</p>
            </div>
            <div className='h-[275px] flex flex-col w-[270px] p-7 gap-2 bg-[#0B3962] text-white '>
            <img className='w-[79px] h-[79px] mt-3' src={image4} ></img>
            <h1 className='font-semibold text-[16px]' >Protect the identity</h1>
            <p className='text-[10px]' >You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps</p>
            </div>
            <div className='h-[275px] flex flex-col w-[270px] p-7 gap-2 bg-[#0B3962] text-white '>
            <img className='w-[68px] h-[68px] mt-3'  src={image2} ></img>
            <h1 className='font-semibold text-[16px]' >Lifetime free transaction</h1>
            <p className='text-[10px]' >You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps</p>
            </div>
            <div className='h-[275px] flex flex-col w-[270px] p-7 g-2  bg-[#0B3962] text-white '>
            <img className='h-[77px] w-[76px] mt-3' src={image1} ></img>
            <h1 className='font-semibold text-[16px]' >Security & control over money</h1>
            <p className='text-[10px]' >You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple steps You can use a mobile device to pay with simple</p>
            </div>
        </div>



    </section>
    {/* graph----------------------------------------- */}
<div className='w-full h-[600px] pl-20 bg-[#001F3B] gap-6 flex flex-col p-10 ' >
  <h1 className='text-white text-[30px] pl-24 font-semibold' >1 CNL = 0.0013 BTC</h1>
  <div className='flex gap-5 pl-24' > 
    <button className='w-[330px] h-[51px] items-center flex   justify-center  bg-white' >Funding allocation </button>
    <button className='w-[330px] h-[51px] items-center flex   justify-center  bg-white'  >Token allocation </button>
  </div>
  <div className='flex gap-10'>
    <img className='h-[395px]  w-[943px] ' src={image5}></img>
    <img className='h-[309px] pt-4 w-[293px]' src={image6}></img>
     </div>
</div>
    </>
  )
}

export default Whyico
