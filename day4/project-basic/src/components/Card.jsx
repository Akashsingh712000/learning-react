import React from 'react'

export default function Card() {
    return (
        <div className='max-w-sm  max-h-sm overflow-hidden p-4 shadow-2xl rounded-xl mt-10 ml-10'>
            <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='object-contain rounded-2xl' />
            <h1 className='mt-4 text-2xl '>Title</h1>
            <p className=' mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias voluptatem, dolor est eveniet velit nihil porro fugit pariatur aut commodi veniam, dolorum maiores minus adipisci vitae repudiandae dignissimos dolore.</p>
            <button className='px-3 py-3 rounded font-semibold bg-blue-400 '>More About</button>
        </div>
    )
}
