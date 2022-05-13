import React from 'react'
import Link from 'next/link'
import { data } from '../../data/data'
export default function year17({ result }) {
  return (
    <div className="container mx-auto mt-20 flex max-w-5xl flex-col shadow-lg">
      <Link href="/">
        <a
          className=" mb-6 w-44  rounded-xl bg-green-500 text-center text-xl text-gray-100"
          href=""
        >
          Back to Index Page
        </a>
      </Link>
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

export async function getStaticProps() {
  const result = data.filter((i) => {
    if (i.date.includes('2017')) {
      return i
    }
  })

  return {
    props: {
      result: result || {},
    },
  }
}
