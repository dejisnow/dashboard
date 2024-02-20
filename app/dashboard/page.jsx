import React from 'react'
import { Sidebar } from './components/Sidebar'

export default function page() {
  return (
    <div className='flex justify-between'>
      <Sidebar />

      <div>
        Display
      </div>

    </div>
  )
}