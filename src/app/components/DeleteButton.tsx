"use client"

import React from 'react'
import { deleteArticle } from '@/blogAPI'
import { useRouter } from 'next/navigation'


type DeleteButtonProps = {
  id: string;
}

const DeleteButton = ({id}: DeleteButtonProps) => {

  const router = useRouter();

  const handleDelete = () => {
    deleteArticle(id)
    router.push("/")
  }

  return (
    <div>
      <button onClick={handleDelete} className='bg-red-600 text-white px-4 py-1 rounded-md'>削除</button>
    </div>
  )
}

export default DeleteButton