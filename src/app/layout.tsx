import { Suspense } from 'react'
import Footer from './Footer'
import Header from './Header'
import './globals.css'
import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container mx-auto bg-slate-100'>
        <Header></Header>
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense>
        <Footer></Footer>
      </body>
    </html>
  )
}
