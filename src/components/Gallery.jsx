import react from 'react'

const Gallery =() => {
    return(
     <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16  '> 
        <h2 className='text-center text-blue-700 p-7 mx-7'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4' >
    
        <div  className='sm:col-span-3 col-span-2 row-span-2'>
            <img src="https://images.unsplash.com/photo-1518650310565-c782d7ff666e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNydWlzZSUyMHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             alt="" />
        </div>
       
        <div className='w-full h-full object-cover'>
            <img src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             alt="" />
        </div>
        <div className='w-full h-full object-cover'>
            <img src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
             alt="" />
        </div>
        <div className='w-full h-full object-cover'>
            <img src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNydWlzZSUyMHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             alt="" />
        </div>
        <div className='w-full h-full object-cover'>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
             alt="" />
        </div>
        </div>
    </div>
    )
}




export default Gallery;


