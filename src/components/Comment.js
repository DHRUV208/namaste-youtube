import React from 'react'
import { USER_ICON } from '../utils/constants';

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex shadow-lg bg-gray-300 p-2 rounded-lg my-2'>
      <img className='w-12 h-12' alt='user_image' src={USER_ICON} />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
