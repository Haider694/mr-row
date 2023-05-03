import React from 'react'
import { NavLink, Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import Imag2 from '../Assets/images/bargar1.jpg';

import { getMenu } from '../Assets/Services/main';
import Pizza from '../components/Pizza'
import ApiIntegrate from './ApiIntegrate';

export default function WhatsYouLikeToEatToday() {
  <Route path='/pizza' element={<Pizza />} />
 const menu=getMenu()
  return (
    <div className='w-auto'>
      <div className='grid grid-cols-1 '>
      <ApiIntegrate/>
        <div className='flex flex-row w-full gap-2'>
          <div className='basis-4/5'>
            <h2 className='text-xl'>Whats You Like To Eat Today</h2>
          </div>
          <div className='basis-1/5'>
            <p className='text-xl text-right text-yellow-500'>See All</p>
          </div>

        </div>
        <div className=' mt-2 w-auto grid-col-1 '>
          <div className='snap-x flex w-auto gap-2 overflow-x-scroll snap-mandatory'>
            {
              Object.keys(menu).map((m,index) => {
                
                return (
                  <div key={index} >
                    <div >
                    <img src={Imag2} className=" w-full" alt="logo" />
                    </div>
                    <div className='text-center mt-2 text-yellow-500 '>
                    <NavLink to={`/${m}`}><p className='text-lg'>{m}</p></NavLink>
                    </div>
                    

                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}
