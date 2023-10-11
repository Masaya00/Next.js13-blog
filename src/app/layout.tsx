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
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-grow'>
            <Suspense fallback={<Loading />}>
            {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
