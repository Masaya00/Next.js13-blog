import Footer from './Footer'
import Header from './Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container mx-auto bg-slate-100'>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
