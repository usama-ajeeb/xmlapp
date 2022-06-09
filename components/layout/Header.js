import React, {useState} from 'react'
import Link from 'next/link'
import {years} from '../../pages/index'

function Header() {
  const [dropdown, setDropdown] = useState(false)
  const handler=(e)=>{
    if(!dropdown){
      setDropdown(true)
    } else{
      setDropdown(false)
    }
  }
  return (
    <header className='    w-[100%]   py-8 mb-20  left-0 border-b-4 border-slate-900 '>
      <div className=' flex justify-between px-36 items-center'>
          {/* left */}
          <div className=' bg-black text-white pl-32   py-1 flex justify-center'>
              <Link href='/'>
              <img src="/images/fire-aus-logo.jpg" alt="" className='left-40 absolute top-4' />
              </Link>
              <h1 className='text-3xl font-semibold px-4'>LEGACY Collections</h1>
          </div>
          {/* right */}
          <div>
              <div className='  flex border-4 shadow-lg border-yellow-400'>
                <button className=' bg-yellow-400 px-2 text-white font-bold'>
                  Search
                </button>
                <input type="text" className=' outline-none' />
              </div>
          </div>
      </div>
      <nav className='bg-yellow-400 py-2 mx-36 mt-11'>
            <div className='flex items-center gap-x-12 justify-center'>
              <Link href='#'>
              <a className='font-bold pr-2 border-r-2 border-slate-900'>Bibliographic Works</a>
              </Link>
              <Link href='#'>
              <a className='font-bold pr-2 border-r-2 border-slate-900'>Blog Postings</a>
              </Link>
              <Link href='#'>
              <a className='font-bold pr-2 border-r-2 border-slate-900'>HazardNotes</a>
              </Link>
              <Link href='#'>
              <a className='font-bold pr-2 border-r-2 border-slate-900'>Key Resources</a>
              </Link>
              <Link href='#'>
              <a onClick={handler} className='font-bold pr-2 border-r-2 border-slate-900'>Fire Austrailia</a>
              </Link>
              <Link href='#'>
              <a className='font-bold pr-2 border-r-2 border-slate-900'>Participants</a>
              </Link>
              <Link href='#'>
              <a className='font-bold pr-2 border-r-2 border-slate-900'>Highlights</a>
              </Link>
            </div>
      </nav>
      <div className={`bg-yellow-200 py-2 gap-y-3  px-12 flex flex-col absolute left-[56%] ${dropdown ? 'flex' : 'hidden'}`}>
          {
            years.map(i=>(
              <Link href={i.url} key={i.id}>
   
                <h1 className="text-bold text-xl cursor-pointer ">{i.year}</h1>
           
            </Link>
            ))
          }
      </div>
    </header>
  )
}

export default Header