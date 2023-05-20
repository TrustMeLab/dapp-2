import { ReactNode } from 'react'

import { Container } from '@components/layout/container'
import { Montserrat } from '@next/font/google'
import { Navbar } from '@components/layout/navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '@components/layout/footer'
import { NextFont } from '@next/font'

export const DefaultLayout = ({ children, font }: { children: ReactNode; font: NextFont }) => {
  return (
    <div className="">
      <Navbar />
      <main className={`p-6 min-h-screen ${font.className}`}>{children}</main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  )
}
