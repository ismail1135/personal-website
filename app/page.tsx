
import React from 'react'
import Image from 'next/image'
import Banner from '@/public/assets/images/banner.png'

function Home() {
  return (
    <div className="h-screen w-screen flex flex-1 flex-col">
      <main className="bg-[#F9FBD1]" style={{
        backgroundSize: '50px 50px',

        backgroundImage: `linear-gradient(to right, #E0E0E0 1px, transparent 1px), linear-gradient(to bottom, #E0E0E0 1.5px, transparent 1.5px)`,
      }}>
        {/* banner */}
        <div className="w-full h-screen flex flex-1 items-center justify-center ">
          <div className="w-2/3 h-1/2">
            <Image src={Banner} alt="banner" />
          </div>
        </div>

        <div className="w-full flex flex-1 items-center justify-center " style={{height: '200vh'}}>
          <div className="w-2/3 h-1/2">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to Our Website</h1>
            <p className="text-lg text-center">We are glad to have you here. Explore our content and enjoy your stay!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
