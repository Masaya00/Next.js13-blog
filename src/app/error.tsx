"use client"

import React from 'react'

const Error = ({reset}: {reset:() => void}) => {
  return (
    <div>
      <div className='bg-red-100 border-l-4 border-red-500 text-red-700 py-3 mt-4 rounded shadow-md'>
        <h3 className='ml-2 font-bold'>エラーが発生しました</h3>
        <button onClick={() => reset()} className='bg-red-600 text-white px-2 py-1 rounded-md ml-3 mt-4'>
          もう一度試す
        </button>
      </div>

    </div>
  )
}

export default Error