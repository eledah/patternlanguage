import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pattern Language',
  description: 'Persian Translation for "A Pattern Language", Written by Christopher Alexander',
}

export default function RootLayout({
  children,
}: {
  // This is the page
  children: React.ReactNode
}) {
  const header = 
  <header>
    <div className='text-center border-b border-slate-200 py-4 my-6'>   
      <Link className="text-2xl font-bold" href="/">
        <h3 className='inline px-5'>زبان الگو</h3>
      </Link>
      {/* <div className='text-center my-2'>
        <Link className='inline ml-3' href="/">نوشته‌ها</Link>
        <Link className='inline mr-3' href="/quotes">بریده‌ها</Link>
      </div> */}
    </div>
  </header>

  const footer =
  <div className='border-t border-slate-200 mt-6 py-6'>
    <div className='hover:animate-pulse text-center'>
      <Image className='inline mx-auto' src="/patternlanguage/footer.png" width={40} height={40} alt="fav"></Image>
    </div>
  </div>

  return (
    // this is the header and the fooder
    <html lang="en" dir='rtl' className='bg-amber-50'>
      <head>
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/sahel-font@v3.4.0/dist/font-face.css" rel="stylesheet" type="text/css" />
      </head>
      <body className={inter.className}>
        <div className='mx-auto md:max-w-2xl lg:max-w-3xl px-6'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
