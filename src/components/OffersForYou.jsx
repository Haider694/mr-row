import React from 'react'
import Imag4 from '../Assets/images/images.jpg';
import { BiQrScan } from 'react-icons/bi'


export default function OffersForYou() {
    return (
        <div className='w-auto h-auto mt-2'>
            <div className='grid gap-2 justify-items-center grid-cols-1 '>
                <div className='flex  w-full gap-2 '>
                    <div className='basis-4/5'>
                        <h2 className='text-xl'>Offers for you</h2>
                    </div>
                    <div className=' basis-1/5'>
                        <p className='text-xl text-right text-yellow-500'>See All</p>
                    </div>

                </div>
                <div className="w-full grid-col-1  ">
                    <div className='snap-x flex w-full gap-2 overflow-x-scroll snap-mandatory'>
                        <div className="snap-start w-full flex-shrink-0 grid item-center mb-2 h-auto ">
                            <img alt="Offerfor you" className='w-full' src={Imag4} />
                        </div>
                        <div className=" snap-start w-full flex-shrink-0 grid item-center mb-2 h-auto">
                            <img alt="Offerfor you" className='w-full' src={Imag4} />
                        </div>
                        <div className="snap-start w-full flex-shrink-0 grid item-center mb-2 h-auto">
                            <img alt="Offerfor you" className='w-full' src={Imag4} />
                        </div>
                        <div className="snap-start w-full flex-shrink-0 grid item-center mb-2 h-auto ">
                            <img alt="Offerfor you" className='w-full' src={Imag4} />
                        </div>

                    </div>

                </div>

                <div className='flex flex-row gap-4 justify-between m-2 '>
                    <div className='w-full flex flex-row justify-center  bg-gray-100'>
                        <div className=''></div>
                        <div className=' '>
                            <button className='flex p-2 gap-1 bg-yellow-500 rounded-2xl'>
                                <BiQrScan fontSize={30} className=' hover:text-gray-300 text-white'  /><p className='text-2xl text-white'>SCAN & CONNECT</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
