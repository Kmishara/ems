import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5  flex-nowrap w-full py-5 mt-10'>
        <div className='h-full flex-shrink-0 w-[300px] p-5 rounded-xl bg-yellow-500 '>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 text-sm bg-red-600'>high</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make a channel</h2>
            <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta enim fuga non soluta maxime?</p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
        <div className='h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-500 '></div>
    </div>
  )
}

export default TaskList