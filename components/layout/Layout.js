import React from 'react'
import Footer from './footer'
import Header from './Header'

export default function Layout({children}) {
  return (
      <>
      <Header />
    <div>{children}</div>
    <Footer />
    </>
  )
}
