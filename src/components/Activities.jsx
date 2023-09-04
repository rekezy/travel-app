import react from 'react'

const Activities = () => {

    return (
        <div className='max-w-[1180px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img  className='w-full h-full object-cover relative border-4 border-white shadow-lg  ' src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg  ' src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-2xl font-bold'>Snow Skiting</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg  ' src="https://images.unsplash.com/photo-1526991757821-1307bf7800f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxzbm93JTIwc2tpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="" />
            </div>

        </div>
    )
}



export default Activities
