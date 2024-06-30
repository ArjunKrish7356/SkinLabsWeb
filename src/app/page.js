import React from 'react'

export default function Home() {
  return (
 <main className=' block'>
  <div className=" h-auto w-auto">
    <div className=" top h-screen relative w-full flex overflow-hidden">
      <img className=" absolute left-0 h-auto md:h-auto m-5 md:m-10 z-10 size-40 md:size-60  top-0 " src="https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f20ebeb69a12b8e50d2653b_skinlabs_logo.svg" alt="Logo"></img>
      <div className=" bg-center bg-cover bg-[url('https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?cs=srgb&dl=pexels-shiny-diamond-3762875.jpg&fm=jpg')] h-screen w-full md:w-1/2 arjun z-0 relative"></div>
      <div className=" bg-center bg-cover bg-[url('https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg')]  hidden md:block h-screen w-1/2 z-0 relative"></div>
      <h1 className="absolute font-serif left-0 m-5 md:m-10 md:mb-24 text-black text-xl md:text-3xl top-1/2 z-10" >Reflection in Modernity</h1>
      <h1 className="absolute font-serif font-normal left-0 m-5 md:m-10 mt-14 md:mt-20 text-black text-7xl md:text-9xl top-1/2 w-auto md:w-2/6 z-10">The Skincare Revolution</h1>
   </div>
   <div className="product h-screen w-full ">
      <h1 className=" font-serif font-medium lg:font-thin mt-20 lg:mt-60 mx-5 lg:mx-10 mb-12 lg:mb-28 text-4xl lg:text-8xl text-black">Featured products</h1>

      <div className="product-navbar h-min">

          <div className='navbar sticky top-0 z-30 -translate-x-10 text-black text-2xl w-screen bg-slate-800 h-0 text-right float-end'>
            <div className=' bg-white w-1/2 h-0'></div>
            <div className=" overflow-hidden translate-x-5 bg-slate-100 mx-5 lg:flex h-24 lg:h-36 lg:justify-evenly text-lg lg:text-3xl text-gray-500 w-full lg:w-1/2 lg:float-end">
                  <h1 className=" my-1 text-center  lg:flex-col lg:content-around lg:w-1/4">Filter by category</h1>
                  <div className=" flex justify-evenly my-2 w-auto lg:w-3/4">
                    <a href="#clean" className=" border-solid border-2 border-slate-100 lg:flex-col lg:content-around  target:border-black px-8 py-2 ">Clean</a>
                    <a href="#treat" className=" border-solid border-2 border-slate-100 lg:flex-col lg:content-around  target:border-black px-8 py-2">Treat</a>
                    <a href="#moist" className=" border-solid border-2 border-slate-100 lg:flex-col lg:content-around  target:border-black px-8 py-2">Moisturise</a>
                  </div>
            </div>
          </div>
            <div className= ' lg:hidden h-36 w-full '></div>
            <div id="clean" className=" h-[50vh] md:h-screen ">
              <h1 className=" bg-white  font-serif font-thin hidden lg:flex items-center mx-10 my-20 h-36 align-middle text-6xl text-black top-0 sticky">Best selling cleansers</h1>
              <div className='snap-x no-scrollbar overflow-x-scroll h-full w-auto flex '>
                <div className=' snap-center h-3/4 min-w-60'>
                    <div className=' photo'>
                      <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                    </div>
                    <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>               
                </div>
                <div className=' snap-center h-3/4 min-w-60'>
                    <div className=' photo'>
                    <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                    </div>
                    <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>     
                </div>
                <div className=' snap-center h-3/4 min-w-60'>
                  <div className=' photo'>
                  <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                  </div>
                  <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>     
                </div>
              </div>
            </div>
            <div id="treat" className=" h-[50vh] md:h-screen ">
              <h1 className=" bg-white  font-serif font-thin hidden lg:flex items-center mx-10 my-20 h-36 align-middle text-6xl text-black top-0 sticky">Treatment solutions</h1>
              <div className='snap-x no-scrollbar overflow-x-scroll h-full w-auto flex '>
                <div className=' snap-center h-3/4 min-w-60 '>
                    <div className=' photo'>
                    <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                    </div>
                    <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>                
                </div>
                <div className=' snap-center h-3/4 min-w-60 '>
                  <div className=' photo'>
                    <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                  </div>
                  <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>     
                </div>
                <div className=' snap-center h-3/4 min-w-60 '>
                  <div className=' photo'>
                  <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                  </div>
                  <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>      
                </div>
              </div>
            </div>
            <div id="moist" className=" h-[50vh] md:h-screen">
              <h1 className=" bg-white  font-serif font-thin hidden lg:flex items-center mx-10 my-20 h-36 align-middle text-6xl text-black top-0 sticky">For moisturised skin</h1>
              <div className='snap-x no-scrollbar overflow-x-scroll h-full w-auto md:w-full flex   '>
                <div className=' snap-center h-3/4 min-w-60'>
                    <div className=' photo '>
                      <img className='img-photo' src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                    </div>
                    <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>              
                </div>
                <div className=' snap-center h-3/4 min-w-60 '>
                    <div className=' photo'>
                    <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                    </div>
                    <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>     
                </div>
                <div className=' snap-center h-3/4 min-w-60 '>
                    <div className=' photo'>
                    <img src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f114a1c26b4cf1bdc88fe2a_Glass-Bottle-MockupTransparent.png'></img>
                    </div>
                    <div className=' text h-1/4 w-full'>
                      <h1 className=' text-black text-xs'>PROTECTS AND MOISTURIZES</h1>
                      <h1 className=' text-black text-xl font-bold '>Oat Cleansing Balm</h1>
                    </div>    
                </div>
              </div>
            </div>
      
      </div> 
   </div>
  </div>
   <div className='contact h-[85vh]  w-full  mt-[55vh] md:mt-[270vh] block md:flex'>
    <div className='contact-text font-serif px-5 md:px-10 h-1/2 md:h-full md:w-1/2 pt-[50%] md:pt-0 md:content-center'>
      <div className=' md:w-fit md:h-fit ' >
        <h1 className='w-fit text-3xl md:text-9xl font-medium  text-black  '>We're Social</h1>
        <p className=' text-lg md:text-3xl pt-2 text-gray-500 md:leading-loose'>Join our community of skincare junkies like you who know that a great skicare routine goes a long way.</p>
        <button className=' bg-black text-white min-h-16 w-full md:w-96 md:font-medium md:text-3xl mt-5 md:min-h-24 '>FIND US ON SOCIAL</button>
      </div>
    </div>
    <div className=' grid grid-cols-2 grid-rows-3 contact-img  h-1/2 md:h-full w-full md:w-1/2 px-5 md:px-10 text-black pt-20 md:pt-0'>
       <img loading='lazy' src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f20ea5ac3de55e1de2b1674_img1.jpg'></img>
       <img loading='lazy' src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f20ea7c2711ae005accd97e_img3.jpg'></img>
       <img loading='lazy' src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f20ea8c0b51f19c2eeae6ea_img4.jpg'></img>
       <img loading='lazy' src='https://assets.website-files.com/5f040c8ad0b82a728ec61a1e/5f20ea6f2711ae9f30ccd97d_img.jpg'></img>
    </div>
   </div>
  </main>
  
  );
}
