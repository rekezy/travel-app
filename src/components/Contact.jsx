import React from "react";

const Contact =() =>{

return(
    <div id='contact' className="max-w-[1140px m-auto w-full p-4 py-16]">
        <h2 className="text-center text-grey-700">Send us a message</h2>
        <p className="text-center text-grey-700 py-3">we're standing by!</p>
        <div className="grid md:grid-cols-2">
            <img className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
            src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

        <form >
            <div className="grid grid-cols-2">
            <input className="border p-3 m-2 " type="text" placeholder="First" />
            <input className="border p-3 m-2 " type="text" placeholder="last" />
            <input  className="border p-3 m-2" type="email" placeholder="email" />
            <input  className="border p-3 m-2" type="tel" placeholder="phone" />
            <input  className="border col-span p-2 m-2 " type="text" placeholder="Address" />
             <textarea className="border col-span-2 m-2 p-2" cols="30" rows="10 " placeholder="Send us a message"></textarea>
            <button className="col-span-2 m-2">Submit</button>
            </div>
        </form>
        </div>
    </div>

)

}

export default Contact;