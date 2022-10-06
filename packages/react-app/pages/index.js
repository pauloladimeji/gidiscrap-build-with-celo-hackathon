import React from 'react'
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <>
        <Layout>

            <section className='bg-white py-14'>
                <div className='container mx-auto'>
                     <div className='grid grid-cols-2 items-center '>
                        <div className='w-5/6'>
                            <div>
                                <h1 className='text-4xl '>
                                Open Marketplace for Recycled Plastics
                                </h1>
                            </div>
                            <div className='mb-10 mt-5'>
                                <p className='text-md'>
                                    In order to fight plastic pollution, GidiScrap is an open marketplace that connects buyers of used and recycled plastics with individuals and businesses who want to donate or sell them.

                                </p>
                            
                            </div>

                            <div>
                                <a href='' className='rounded-full px-5 py-4 text-md bg-[#DD7D37] text-white' >Sign up for free</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src='/images/hero_image.svg' />
                            </div>
                        </div>

                    </div>
                </div>
               
            </section>  

            <section className='py-4 bg-[#FFFBF9]'>
                <div className='container mx-auto'>
                    <div className='py-14'>
                        <div className='mb-9'>
                            <h3 className='text-center text-xl'>How it Works</h3>
                        </div>
                        
                        <div>
                            <div className='flex items-center justify-center gap-10'>
                                <button className="">Company</button>
                                <button className="">Individual</button>
                            </div>

                            <div className='tab-content py-10'>
                                <div className='grid grid-cols-4'>
                                    <div className='px-5'>
                                        <div>
                                            <div className='circle'></div>
                                        </div>
                                        <div className='text-center'>
                                            <h4>Create Account</h4>
                                            <p className='text-sm'>Company Staff creates an account on GidiScrap with MetaMask (or Valora)</p>
                                        </div>
                                    </div>
                                    <div className='px-5'>
                                        <div>
                                            <div className='circle'></div>
                                        </div>
                                        <div className='text-center'>
                                            <h4>Create Account</h4>
                                            <p className='text-sm'>Company Staff creates an account on GidiScrap with MetaMask (or Valora)</p>
                                        </div>
                                    </div>
                                    <div className='px-5'>
                                        <div>
                                            <div className='circle'></div>
                                        </div>
                                        <div className='text-center'>
                                            <h4>Create Account</h4>
                                            <p className='text-sm'>Company Staff creates an account on GidiScrap with MetaMask (or Valora)</p>
                                        </div>
                                    </div>
                                    <div className='px-5'>
                                        <div>
                                            <div className='circle'></div>
                                        </div>
                                        <div className='text-center'>
                                            <h4>Create Account</h4>
                                            <p className='text-sm'>Company Staff creates an account on GidiScrap with MetaMask (or Valora)</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>


            <section className='py-4 bg-[#FFFBF9]'>
                <div className='container mx-auto'>
                    <div className='py-14'>
                        <div className='mb-9'>
                            <h3 className='text-center text-xl'>Recent Requests</h3>
                        </div>
                        
                        <div>

                            <div className='grid grid-cols-4'>
                                <div className='px-5'>
                                    <div>
                                        <div className='w-full h-56'>
                                            <img src='/images/water_bottle.png' className='w-full h-full'/>
                                        </div>
                                    </div>
                                    <div className=' flex items-start justify-between'>
                                       <div>
                                            <h4>PET Bottles</h4>
                                            <div>
                                                <img src=''/>
                                                <div>
                                                    <p className=''>Ikeja, Lagos</p>
                                                    <p>20 mins away from you</p>
                                                </div>
                                            
                                            </div> 
                                            
                                       </div>
                                        <div>
                                            circle
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </section>
        
        </Layout>
    </>
  )
}

export default Home;