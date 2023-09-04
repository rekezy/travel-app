import React from "react";






const Hero =() =>{

    return(
        <div className='w-full h-[100vh]'>
         <img src="https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
         alt="/" 
         className='w-full h-full object-cover'/>
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            
                    <h2 className='text-4xl py-4 italic'>With TravelFree</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores accusantium consectetur corrupti ut facilis veritatis perferendis dolorem sapiente quia tempora saepe fugiat itaque, at,
                         ipsam nobis, architecto exercitationem reiciendis qui.</p>
                </div>
            </div>

        </div>
    )
}



export default Hero;