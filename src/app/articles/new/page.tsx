"use client"

import { createlArticle } from '@/blogAPI'
import { spawn } from 'child_process'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CreateBlogPage = () => {

  const router = useRouter();
  const [id, setId] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    await createlArticle(id, title, content);
    setLoading(false)
    router.push("/")
    router.refresh()
  }

  return (
    <div className='min-h-screen py-8 md:px-12'>
      <h2 className='text-2xl font-bold my-4 border-l-8 pl-2 py-1 border-gray-700'>Blog 新規作成</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input type="text" onChange={(e) => setId(e.target.value)} className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ' />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ' />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>内容</label>
          <textarea onChange={(e) => setContent(e.target.value)} className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' rows={10} />
        </div>
        <button className={`py-1 px-4 border rounded-md text-white ${
          loading ? "bg-gray-800 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-900"
        } `}>
          {loading ? <div className='w-6 h-6 border-t-2 border-white rounded-full animate-spin'></div> : <div>投稿</div>}
        </button>
      </form>
    </div>
  )
}

export default CreateBlogPage