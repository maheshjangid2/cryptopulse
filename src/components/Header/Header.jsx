import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import image1 from './assets/Group 2.png'
import image2 from './assets/Group 265.png'
import About from '../About/About'
import Whyico from '../whyico/Whyico'
import Sales from '../Sales/Sales'
import Roadmap from '../Roadmap/Roadmap'
import Ourteam from '../Ourteam/Ourteam'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'
import { HashLink as Link } from 'react-router-hash-link'
 
function Header() {
  return (
 
    <>
    <BrowserRouter>
   <header className='shadow sticky z-50  top-0'>
    <nav className='bg-[#001F3B] px-4   lg:px-6 py-2.5'>
   <div className='flex h-20 flex-wrap bg-[#001F3B] justify-between items-center mx-auto max-w-screen-xl '>
   <img src={image1} className='mr-3 w-[173px] h-[50px]  '/>
   <div className='hidden justify-between items-center w-full lg:flex lg:w-auto ' >
    <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0' >
      <li
         className="block py-2 pr-4 pl-3 text-white
        border-b border-gray-100 hover:bg-gray-100 
        lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0"
        ><Link to='#About' >About</Link>
          </li>
          <li
         className="block py-2 pr-4 pl-3 text-white
        border-b border-gray-100 hover:bg-gray-100 
        lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0"
        ><Link to='#whyico'>why ICo</Link>
          </li>
          <li
         className="block py-2 pr-4 pl-3 text-white
        border-b border-gray-100 hover:bg-gray-100 
        lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0"
        ><Link to='#Sales' >Sales</Link>
          </li>
          <li
         className="block py-2 pr-4 pl-3 text-white
        border-b border-gray-100 hover:bg-gray-100 
        lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0"
        ><Link to='#Roadmap'>Roadmap</Link>
          </li>
          <li
         className="block py-2 pr-4 pl-3 text-white
        border-b border-gray-100 hover:bg-gray-100 
        lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0"
        ><Link to='#Ourteam'>Team</Link>
          </li>
          <li
         className="block py-2 pr-4 pl-3 text-white
        border-b border-gray-100 hover:bg-gray-100 
        lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0"
        ><Link to='#Contacts'>Contacts</Link>
          </li>
    </ul>
   </div>
   <div className="text-gray-800 cursor-pointer focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"> 
    <img src={image2} className='w-[128px] h-[38px]:' ></img>
   </div>
   </div>
    </nav>
   </header>
      <About/>
      <Whyico/>
      <Sales/>
      <Roadmap/>
      <Ourteam/>
      <Contacts/>
      <Footer/>


   </BrowserRouter>
    </>
  )
}

export default Header
