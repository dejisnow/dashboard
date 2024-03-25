import React from 'react'
import { Sidebar } from './components/Sidebar'

export default function page() {
  return (
    <div className='grid grid-flow-col grid-cols-5 md:grid-cols-8 '>
      <div className=' '>
        <Sidebar />

      </div>
      <div className=' text-sm md:text-base col-span-4 md:col-span-7'>
        <div className=' grid grid-cols-4 h-1/4'>
        <div>Data1</div>
        <div className='bg-red-300 col-span-2'>Data2</div>
        <div>Data3</div>
        </div>
        <div className='grid grid-cols-4 h-3/4'>
        <div className='col-span-3 bg-blue-300'>Chart</div>
        <div>Stat</div>
        
        </div>
        
      </div>

    </div>
  )
}