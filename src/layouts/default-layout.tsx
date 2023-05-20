import { ReactNode } from 'react'

import { Container } from '@components/layout/container'
import { Navbar } from '@components/layout/navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '@components/layout/footer'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="p-6">{children}</main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  )
}
