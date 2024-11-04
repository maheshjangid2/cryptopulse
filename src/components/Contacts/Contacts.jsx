import React from 'react'
import image1 from './assets/Group 323.png'
import image2 from './assets/Group 245.png'
import image3 from './assets/Group (3).png'
import image4 from './assets/Group 257.png'
import image5 from './assets/Group 258.png'
import image6 from './assets/Group 259.png'


function Contacts() {
  return (
    <>
    <section id='Contacts' className='w-full overflow-x-hidden text-white bg-[#001F3B] h-auto'>
     <div className='flex flex-col items-center gap-5 pt-10' >
        <h1 className='text-[20px] font-semibold' >FAQs</h1>
        <div className='flex gap-10' >
            <img className='w-[565px] h-[436px]' src={image1} ></img>
            <div className='flex flex-col gap-7'>
                <h1>Frenquently Questions</h1>
                <div className='flex gap-6' >
                    <span>General</span>
                    <span>Pre ICO & </span>
                    <span>Token</span>
                    <span>client</span>
                    <span>legal</span>
                </div>
                
                <div className='flex flex-col gap-6 text-[16px] w-[589px]'>

                   <div className='flex justify-between'> <h1 className='text-[16px]'>Why choose ICO?</h1><img className='w-[24px] h-[24px]' src={image2}/></div>
                   <hr></hr>
                   <div className='flex justify-between'> <h1 className='text-[16px]'>What cryptocurrencies can I use to purchase?</h1><img className='w-[24px] h-[24px]' src={image2}/></div>
                    <hr></hr>
                    <div className='flex justify-between'> <h1 className='text-[16px]'>How can I participate in the ICO Token sale?</h1><img className='w-[24px] h-[24px]' src={image2}/></div>
                    <hr></hr>
                    <div className='flex justify-between'> <h1 className='text-[16px]'>How do I benefit from the ICO Token?</h1><img className='w-[24px] h-[24px]' src={image2}/></div>
                    <hr></hr>
                </div>
            </div>
        </div>
     </div>
    </section>

    {/* ----------------------------------------section 2----------------------------------------------- */}
    <section  className='w-full h-auto bg-[#001F3B] overflow-x-hidden'>
        <div className='flex flex-col gap-8 pt-10 pb-8 text-white items-center'>
            <h2 className='text-[20px] font-semibold'>CONTACT</h2>
            <h1 className='text-[28px] font-semibold'>Contact ICO Crypto</h1>
            <div className='flex gap-10'>
                <div className='flex gap-5 text-white pt-[70px]'> 
                    <div className='flex flex-col gap-6 '><input className='text-[15px] pl-4 text-black bg-[#365571] w-[324px] h-[57px]' placeholder='your Name' />
                    <input className='w-[324px] text-[15px] pl-4 h-[57px] bg-[#365571]' placeholder='Email'/>
                    <input className='w-[324px] text-[15px] pl-4 h-[57px] bg-[#365571]' placeholder='your Phone'/></div>
                    <div className='flex flex-col gap-6'><textarea className='pt-4 pl-4 bg-[#365571] w-[324px] h-[140px]' placeholder='Write your message' cols={3}/>
                    <button className='w-[324px] h-[57px] text-[18px] text-black  bg-white' >Send Message </button></div>    
                
                </div>
                <img className='w-[642px] h-[381px]' src={image3}/>
            </div>
            <div className='flex gap-10'>
                <div className='flex gap-3 justify-center items-center text-[20px]'>
                    <img className='h-[50px] w-[50px]' src={image4}/> <h1>Info@yourcompany.com</h1>
                </div>
                <div className='flex gap-3 text-[20px] items-center'>
                    <img className='h-[50px] w-[50px]' src={image5}/> <h1>+84 0977425031</h1>
                </div>
                <div className='flex gap-3 text-[20px] items-center'>
                    <img className='h-[50px] w-[50px]' src={image6}/> <h1>Join us on Telegram</h1>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Contacts
