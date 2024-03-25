
import Link from 'next/link'
import React from 'react'
import { WiLightning } from "react-icons/wi";
import { WiEarthquake } from "react-icons/wi";


export const Sidebar = ({children}) => {
  return (
    <div className='text-sm bg-slate-500 h-screen p-2'>

        <ul className=' '>
        <Link href={''}> <li className='my-1 hidden md:flex hover:bg-blue-300 p-1 '>Analytics</li><WiEarthquake className='md:hidden text-2xl p-1 my-1 hover:bg-blue-200 '/></Link>
        <Link href={''}> <li className='my-1 hidden md:flex hover:bg-blue-300 p-1 '>Energy</li><WiEarthquake className='md:hidden text-2xl p-1 my-1 hover:bg-blue-200 '/></Link>
        <Link href={''}> <li className='my-1 hidden md:flex hover:bg-blue-300 p-1 '>Transactions</li><WiEarthquake className='md:hidden text-2xl p-1 my-1 hover:bg-blue-200 '/></Link>
        <Link href={''}> <li className='my-1 hidden md:flex hover:bg-blue-300 p-1 '>Wallet</li><WiEarthquake className='md:hidden text-2xl p-1 my-1 hover:bg-blue-200 '/></Link>
         
        </ul>
   
       

      <main>{children}</main>
    </div>
  )
}
