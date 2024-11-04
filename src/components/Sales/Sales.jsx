import React from 'react'
import image1 from './assets/Rectangle 34.png'
import image2 from './assets/Group 47.png'
import image3 from './assets/Rectangle 155.png'
import image4 from './assets/Line 4.png'
import image5 from './assets/Ellipse 12.png'
function Sales() {
  return (
 <section id='Sales' className='flex flex-col items-center h-[1650px] bg-[#0A3255] w-full' >
    <h3 className='text-[20px] text-white pt-10 pb-5' >ICO Cryptolight Token </h3>
    <h1 className='text-[25px] font-semibold text-white pb-4' >ICO Tokens Details & Sale Tokens</h1>
    <img className='w-[39px] h-[39px]' src={image2} ></img>
    <div className='flex ' >
      <div className='flex flex-col gap-48 pt-[200px] ' >
        <div className='flex items-center ' >
          {/* box--------------------------- */}
              <div className='flex flex-col w-[361px]  bg-[#3a566e] h-[153px] items-center gap-3 justify-center' >
                <h1 className='text-[20px] text-white ' >sales</h1>
                <span className='text-[25px] text-[#0A3255] font-bold' >Feb 10, 2022</span>
              </div>
              <img className='w-[77px] h-[8px]' src={image3}></img>
        </div>
        <div className='flex items-center  ' >
          {/* box--------------------------- */}
              <div className='flex flex-col w-[361px]  bg-[#3a566e] h-[153px] items-center gap-3 justify-center' >
                <h1 className='text-[20px] text-white '>Number of Tokens for Sale</h1>
                <span className='text-[25px] text-[#0A3255] font-bold'>1.000.000 Tokens</span>
              </div>
              <img className='w-[77px] h-[8px]' src={image3}></img>
        </div>
        <div className='flex items-center  ' >
          {/* box--------------------------- */}
              <div className='flex flex-col w-[361px]  bg-[#3a566e] h-[153px] items-center gap-3 justify-center' >
                <h1 className='text-[20px] text-white '>Minimal Transaction</h1>
                <span className='text-[25px] text-[#0A3255] font-bold'>10 Tokens / Transaction</span>
              </div>
              <img className='w-[77px] h-[8px]' src={image3}></img>
        </div>
        </div>
        <img className='h-[1068px] w-[8px]' src={image1} ></img>
        <div className='flex flex-col gap-48 pt-5'>
        <div className='flex items-center  ' >
          {/* box--------------------------- */}
          <img className='w-[77px] h-[8px]' src={image3}></img>
              <div className='flex flex-col w-[361px]  bg-[#3a566e] h-[153px] items-center gap-3 justify-center' >
                <h1 className='text-[20px] text-white '>start</h1>
                <span className='text-[25px] text-[#0A3255] font-bold'>Aug 8, 2021</span>
              </div>
              
        </div>
        <div className='flex items-center  ' >
          {/* box--------------------------- */}
          <img className='w-[77px] h-[8px]' src={image3}></img>
              <div className='flex flex-col w-[361px]  bg-[#3a566e] h-[153px] items-center gap-3 justify-center' >
                <h1 className='text-[20px] text-white '> Acceptable currencies</h1>
                <span className='text-[25px] text-[#0A3255] font-bold'>ETH, BTC, LTC</span>
              </div>
              
        </div>
        <div className='flex items-center  ' >
          {/* box--------------------------- */}
          <img className='w-[77px] h-[8px]' src={image3}></img>
              <div className='flex flex-col w-[361px]  bg-[#3a566e] h-[153px] items-center gap-3 justify-center' >
                <h1 className='text-[20px] text-white '>Tokens exchange rate</h1>
                <span className='text-[25px] text-[#0A3255] font-bold w-[210px]'>1 ETH = 650 ICC, 
                1 BTC = 1940 ICC</span>
              </div>
              
        </div>
        </div>  
    </div>
    <img className='w-[39px] h-[39px]' src={image2} ></img>
    <div className='mt-20'> 
      <img className='w-[994px]' src={image4} >
    
      </img>
     <div className='flex gap-56  mt-[-13px] '>
     <img  className='w-[23px] h-[23px]' src={image5}/>
      <img className='w-[23px] h-[23px]' src={image5}/>
      <img className='w-[23px] h-[23px]' src={image5}/>
      <img className='w-[23px] h-[23px]' src={image5}/>
      <img className='w-[23px] h-[23px]' src={image5}/>
     </div>
    </div>
{/* table---------------------------------------------------- */}

<table className='w-full max-w-[1000px] mt-12 font-semibold bg-[#4F7BA1]'>
<tr className= ' h-16 text-[18px] font-semibold text-[#001F3B]'>
  <th className='border-white border-2 '>Aug 08 - Aug 31</th>
  <th className='border-white border-2'>Sep 01 - Sep 15</th>
  <th className='border-white border-2'>Sep 16 - Sep 30</th>
  <th className='border-white border-2'>Oct 01 - Oct 15</th>
  <th className='border-white border-2'>Oct 16 - Oct 31</th>
</tr>
<tr className=' h-24 text-white'>
  <td className='w-44 border-white border-2  flex-col text-center text-[22px]'>30% Bonus $0.2009/token</td>
  <td className='w-44  border-white border-2 flex-col text-center text-[22px]' >20% Bonus $0.3009/token</td>
<td className='w-44 border-white border-2  text-center text-[22px]'> 15% Bonus $0.4009/token</td>
<td className='w-44  border-white border-2 flex-col text-center text-[22px]'>10% Bonus $0.5009/token</td>
<td className='w-44 border-white border-2  flex-col text-center text-[22px]'>5% Bonus $0.7009/token</td>
</tr>
</table>

 </section>
  )
}

export default Sales
