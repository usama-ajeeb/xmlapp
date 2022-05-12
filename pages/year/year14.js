import Link from 'next/link'
import React from 'react'
import { data } from '../../data/data'

function year14({ result }) {
  return (
    <div className="container mx-auto mt-20 max-w-5xl shadow-lg">
      {result.map((i) => (
        <Link href={i.slug}>
          <div className=" flex cursor-pointer flex-col items-center border-b py-6 px-4">
            <h1 className="text-center text-3xl">{i.title}</h1>
            <p>Date: {i.date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default year14

export async function getStaticProps() {
  const result = data.filter((i) => {
    if (i.date.includes('2014')) {
      return i
    }
  })

  return {
    props: {
      result: result || {},
    },
  }
}