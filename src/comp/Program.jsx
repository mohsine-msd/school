import React from 'react'
import lic from '../assets/young-man-academic-gown-holding-diploma-city-street-education-concept.jpg'
import mas from '../assets/young-woman-graduation-ceremony.jpg'
import doc from '../assets/young-woman-wearing-graduation-gown.jpg'
import icon from '../assets//2606584_5920-removebg-preview.png'

function Program() {
  return (
    <div className='flex justify-center flex-col mt-10 ' id='Program'>
        <div className='flex flex-col gap-8 mb-7'>
            <h1 className='text-center text-3xl font-bold'>Our Program</h1>
            <h2 className='text-center text-4xl'>What do we offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center h-full w-[75%] mx-auto gap-4">
  <div className="relative group h-[90%] w-[22rem] mx-auto">
    <img
      src={lic}
      alt="lic"
      className="h-full w-full rounded-md object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-black text-center py-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-full transition-all duration-500">
    <p className='flex justify-center flex-col items-center text-2xl '><img src={icon} alt="icon" className='mix-blend-multiply h-full w-[75%]' />bachelor degree</p>
    </div>
  </div>

  <div className="relative group h-[90%] w-[22rem] mx-auto">
    <img
      src={mas}
      alt="mas"
      className="h-full w-full rounded-md object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-black text-center py-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-full transition-all duration-500">
      <p className='flex justify-center flex-col items-center text-2xl '><img src={icon} alt="icon" className='mix-blend-multiply h-full w-[75%]' /> graduate degree</p>
    </div>
  </div>

  <div className="relative group h-[90%] w-[22rem] mx-auto">
    <img
      src={doc}
      alt="doc"
      className="h-full w-full rounded-md object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-black text-center py-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-full transition-all duration-500">
    <p className='flex justify-center flex-col items-center text-2xl '><img src={icon} alt="icon" className='mix-blend-multiply h-full w-[75%]' />doctorate degree</p>
    </div>
  </div>
</div>




    </div>
  )
}

export default Program