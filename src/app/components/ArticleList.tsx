import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article className='shadow my-4'>
        <Link href="#" className='hover:opacity-75'>
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
            width={1280}
            height={300}
          ></Image>
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#"><span className='bg-gray-800 text-white text-xs py-1 px-3 rounded-xl'>Technology</span></Link>
          <Link href="#" className='text-3xl my-3'>
            Next.jsの勉強中
          </Link>
          <p className='my-3'>Published on 2023/07/15</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Link>
          <Link href="#" className='text-blue-700 mt-5'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList