import React from 'react'

function Footer() {
  return (
    <footer className=' border-t-2 border-t-slate-900 py-6'>
        <div className=' px-20 flex items-center justify-between'>
                        {/* left */}
                        <div className='flex gap-x-8 items-center'>
                <p className=''>Content not updated. For current research and resources, visit NHRA</p>
                <img src='/images/fire-aus-footerlogo.jpg' alt="" />
            </div>
            {/* right */}
         
            <div>
              <h1 className='text-xl font-bold'>CRC LEGACY COLLECTIONS</h1>
              <div className=' flex border-4 shadow-lg border-yellow-400'>
                <button className=' bg-yellow-400 px-2 text-white font-bold'>
                  Search
                </button>
                <input type="text" className=' outline-none' />
              </div>
          </div>
         
        </div>
    </footer>
  )
}

export default Footer