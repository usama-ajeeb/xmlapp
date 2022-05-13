import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { saveAs } from 'file-saver'
// import ExportedImage from 'next-image-export-optimizer'
import { data } from '../../data/data'
// const { XMLParser, XMLBuilder } = require('fast-xml-parser')
// const fs = require('fs')
// const csv = require('csvtojson')

function PageTemplate({ data }) {
  console.log(data)
  const [year, setYear] = useState('')
  useEffect(() => {
    const y = data.date
      .split('-')
      .slice(2, 3)
      .join('')
      .split('')
      .slice(2, 4)
      .join('')
    setYear(y)
  }, [])
  const saveFile = () => {
    saveAs(
      `/pdf/${data.download.split('/').slice(-1).join('')}`,
      `${data.slug}.pdf`
    )
  }
  // `pdf/${iterator.download.split('/').slice(-1).join('')}`
  // C:\Users\usama\Desktop\xmlapp\public\pdf
  function TestImage({ src, width, quality }) {
    return (src = ` ${data.img}`)
  }

  return (
    <div className=" container mx-auto flex flex-col justify-center gap-y-8 p-40">
      {/* <Link href={`/year/year${year}`}>
        <a href="">Back to sub-index page {year}</a>
      </Link> */}
      <div className="flex flex-col ">
        <h1 className="pb-7 text-5xl">{data.title}</h1>
        <p className=" pb-3 text-slate-400">Date: {data.date}</p>
        <img
          className="mx-auto"
          width={600}
          height={300}
          src={`/${data.img}`}
          alt=""
        />
        {/* <Image
        width={600}
        height={300}
        src={`/${data.img}`}
        // alt={data.title}
        // layout='fill'
        // objectFit='cover'
        loader={TestImage}
        priority
      /> */}
        <p className="pt-10">{data.body}</p>
        <button
          className=" mt-8 rounded-3xl bg-green-400 py-3 text-2xl text-white"
          onClick={saveFile}
        >
          Download PDF
        </button>
      </div>
      <Link href={`/year/year${year}`}>
        <a
          className="mt-5 w-72 rounded-xl bg-green-300 py-1  text-center text-lg text-slate-500"
          href=""
        >
          Back to sub-index page Year 20{year}
        </a>
      </Link>
    </div>
  )
}

export default PageTemplate

export async function getStaticProps({ params }) {
  const slug = params.slug

  const jsonArray = data
  const dslug = jsonArray.filter((i) => i.slug == slug)
  return {
    props: {
      data: dslug[0],
    },
  }
}

export async function getStaticPaths() {
  const jsonArray = data
  return {
    paths: jsonArray.map((character) => {
      const slug = character.slug
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
