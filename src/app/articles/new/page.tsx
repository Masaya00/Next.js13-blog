import React from 'react'

const CreateBlogPage = () => {
  return (
    <div className='min-h-screen py-8 md:px-12'>
      <h2 className='text-2xl font-bold my-4 border-l-8 pl-2 py-1 border-gray-700'>Blog 新規作成</h2>
      <form action="">
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ' />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ' />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>内容</label>
          <textarea className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' rows={10} />
        </div>
        <button className='py-1 px-4 border rounded-md bg-gray-800 text-white'>投稿</button>
      </form>
    </div>
  )
}

export default CreateBlogPage