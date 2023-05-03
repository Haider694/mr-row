import React from 'react'

export default function Near() {
    return (
        <div>
            <div className='mt-3 flex flex-col'>
                <div className='mt-2'>
                    <div className='flex flex-row gap-48'>
                        <div className='font-semibold'>
                            <h2 className='text-xl'>Near you</h2>
                        </div>
                        <div className='font-semibold'>
                            <p className='text-xl text-right text-yellow-500'>See All</p>
                        </div>

                    </div>
                    <div className='mt-2 justify-center'>
                        <div className='flex flex-row gap-2 justify-center '>
                            <div className='bg-gray-100 p-2'>
                                <p>Food junction</p>
                                <p className='text-xs'>Fast Food,italian,Chinese</p>
                                <p className='text-xs'>2.4km | City Food Park</p>
                            </div>
                            <div className='bg-gray-100 p-2'>
                                <p>Food junction</p>
                                <p className='text-xs'>Fast Food,italian,Chinese</p>
                                <p className='text-xs'>2.4km | City Food Park</p>
                            </div>
                        </div>

                        <div className='flex flex-row gap-2 justify-center '>
                            <div className='bg-gray-100 p-2'>
                                <p>Food junction</p>
                                <p className='text-xs'>Fast Food,italian,Chinese</p>
                                <p className='text-xs'>2.4km | City Food Park</p>
                            </div>
                            <div className='bg-gray-100 p-2'>
                                <p>Food junction</p>
                                <p className='text-xs'>Fast Food,italian,Chinese</p>
                                <p className='text-xs'>2.4km | City Food Park</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
