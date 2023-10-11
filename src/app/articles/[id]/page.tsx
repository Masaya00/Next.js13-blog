import React from 'react'
import Image from 'next/image'
import { getDetailArticle } from '@/blogAPI'


const Article = async ({params}: {params: {id: string}}) => {

  const detailArticle = await getDetailArticle(params.id)

  return (
    <div className='max-w-3xl mx-auto p-5'>
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
          alt=""
          width={1280}
          height={300}
        ></Image>
        <h1 className='text-4xl text-center'>{detailArticle.title}</h1>
        <div>
          <p>{detailArticle.content}</p>
        </div>
    </div>
  )
}

export default Article