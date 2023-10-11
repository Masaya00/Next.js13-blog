import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/types'

type ArticleCardProps = {
  article: Article
}

const ArticleCard = ({article}: ArticleCardProps) => {
  return (
    <div>
      <article className='shadow my-4' key={article.id}>
        <Link href={`articles/${article.id}`} className='hover:opacity-75'>
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
            alt=""
            width={1280}
            height={300}
          ></Image>
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#"><span className='bg-gray-800 text-white text-xs py-1 px-3 rounded-xl'>Technology</span></Link>
          <Link href={`articles/${article.id}`} className='text-3xl my-3'>
            {article.title}
          </Link>
          <p className='my-3'>{article.createdAt}</p>
          <Link href={`articles/${article.id}`}>
            {/* 70文字以上だったら、それ以上は表示しない */}
            {article.content.length > 70 ? article.content.substring(0, 70): article.content}
          </Link>
          <Link href={`articles/${article.id}`} className='text-blue-700 mt-5'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleCard