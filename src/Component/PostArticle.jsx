import React from 'react'

const PostArticle = (props) => {
  return (
    <div className={`${props.style} sm:w-[420px]`}>
        <div>
            <img src={props.image} alt="" className='sm:w-[448px] sm:h-[340px] object-cover rounded-3xl' />
        </div>
        <div>
            <h1 className='sm:mb-6 font-bold text-[32px]'>{props.title}</h1>
            <p className='sm:mb-20 font-medium text-[20px]'>{props.desc}</p>
            <h5 className='font-medium text-[18px]'>{props.author}</h5>
        </div>
    </div>
  )
}

export default PostArticle