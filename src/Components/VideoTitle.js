import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>

    <h1 className='text-6xl font-bold text-white '>{title}</h1>
    <p className=' py-6  text-sm w-1/3'>{overview}</p>
    <div className=''>
    <button className=' bg-white text-black  p-4 px-12 text-xl  rounded-lg hover: bg-opacity-90'>
            ▶️
        </button>
        <button className='mx-2 bg-gray-600 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>
          ℹ️ More Info 
        </button>
    </div>


    

    </div>
  )
}

export default VideoTitle;