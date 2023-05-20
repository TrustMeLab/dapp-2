import { ReactNode } from 'react'

import { Container } from '@components/layout/container'
import { Navbar } from '@components/layout/navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '@components/layout/footer'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  )
}
