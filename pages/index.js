import Link from 'next/link'
import React from 'react'

export const years = [
  {
    id:0,
    url: '/year/year14',
    year: '2014'
  },
  {
    id:1,
    url: '/year/year15',
    year: '2015'
  },
  {
    id:2,
    url: '/year/year16',
    year: '2016'
  },
  {
    id:3,
    url: '/year/year17',
    year: '2017'
  },
  {
    id:4,
    url: '/year/year18',
    year: '2018'
  },
  {
    id:5,
    url: '/year/year19',
    year: '2019'
  },
  {
    id:6,
    url: '/year/year20',
    year: '2020'
  },
  {
    id:7,
    url: '/year/year21',
    year: '2021'
  },
  {
    id:8,
    url: '/year/year22',
    year: '2022'
  }
]

function index() {
  return (
    <div className="container mx-auto mt-28 max-w-7xl justify-center border-2 pt-28 ">
      <h1 className="pb-6 text-center text-4xl">
        SAMPLE Collection: HazardNote
      </h1>
      <div className="flex flex-wrap gap-y-4 gap-x-10 p-4">
        {
          years.map(i=> (
            <Link href={i.url} key={i.id}>
            <div className=" cursor-pointer shadow-xl">
              <h1 className="rounded-lg p-24 text-3xl">{i.year}</h1>
            </div>
          </Link>
          ))
        }
        {/* <Link href="/year/year14">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2014</h1>
          </div>
        </Link>
        <Link href="/year/year15">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2015</h1>
          </div>
        </Link>
        <Link href="/year/year16">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2016</h1>
          </div>
        </Link>
        <Link href="/year/year17">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2017</h1>
          </div>
        </Link>
        <Link href="/year/year18">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2018</h1>
          </div>
        </Link>
        <Link href="/year/year19">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2019</h1>
          </div>
        </Link>
        <Link href="/year/year20">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2020</h1>
          </div>
        </Link>
        <Link href="/year/year21">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2021</h1>
          </div>
        </Link>
        <Link href="/year/year22">
          <div className=" cursor-pointer shadow-xl">
            <h1 className="rounded-lg p-24 text-3xl">2022</h1>
          </div>
        </Link> */}
      </div>
    </div>
  )
}

export default index
