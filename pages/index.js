import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div className="container mx-auto mt-10 max-w-7xl justify-center border-2 pt-28">
      <div className="flex flex-wrap gap-y-4 gap-x-10 p-4">
        <Link href="/year/year14">
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
        </Link>
      </div>
    </div>
  )
}

export default index
