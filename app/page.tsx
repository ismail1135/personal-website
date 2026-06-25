
import React from 'react'
import Image from 'next/image'
import Banner from '@/public/assets/images/banner.png'
import { Amatic_SC, Erica_One, Poppins } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import { faCakeCandles, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const amatic_SC = Amatic_SC({ subsets: ['latin'], weight: ['700'] })
const erica_One = Erica_One({ subsets: ['latin'], weight: ['400'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

function Home() {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen">
      <main className="bg-[#F9FBD1]" style={{
        backgroundSize: '50px 50px',

        backgroundImage: `linear-gradient(to right, #E0E0E0 1px, transparent 1px), linear-gradient(to bottom, #E0E0E0 1.5px, transparent 1.5px)`,
      }}>
        {/* banner */}
        <div className="flex items-center justify-center flex-1 w-full h-screen ">
          <div className="w-2/3 h-1/2">
            <Image src={Banner} alt="banner" />
          </div>
        </div>
        {/* me content */}
        <div className="flex items-center flex-1 w-full p-28" style={{ height: '110vh' }}>
          {/* me */}
          <div className="flex-col ">
            <div className="w-1/5 bg-blue-600 h-1/2"></div>
            <h1 className="text-4xl font-bold text-[#BE3638]" style={erica_One.style}>Ismail Altın</h1>
            <p className="text-lg   text-[#000000] text-center" style={poppins.style}>Full Stack Developer</p>
            <br />
            <br />
            <div className="flex items-center "> <div className="w-6 h-6 mr-4 "><FontAwesomeIcon icon={faCakeCandles} color="#BE3638" /></div> <p className="text-lg font-bold text-[#BE3638] text-center" style={poppins.style}>12/2006</p></div>
            <br />
            <div className="flex items-center "> <div className="w-6 h-6 mr-4 "><FontAwesomeIcon icon={faLocationDot} color="#BE3638" /></div> <p className="text-lg font-bold text-[#BE3638] text-center" style={poppins.style}>Bitlis, Turkey</p></div>
          </div>
          {/* about me */}
          <div className="w-2/4 h-1/2">
            <h1 className="mb-4 text-6xl font-bold text-center text-accent" style={amatic_SC.style}>About Me</h1>
            <p className="text-lg text-center">hello!</p>
          </div>
          {/* hobbies */}
        </div>

        {/* table content*/}
        <div className="w-full h-screen bg-[#2A8054]" style={{
          backgroundSize: '50px 50px',
          backgroundImage: `linear-gradient(to right, #8CE7B4 1px, transparent 1px), linear-gradient(to bottom, #8CE7B4 1.5px, transparent 1.5px)`,
        }}></div>
      </main>
      {/* thanks */}
      <footer className="flex flex-col gap-16 items-center justify-center w-full h-80 bg-[#CEFC9A]">
        <p className="text-4xl text-center" style={erica_One.style}>Thanks for reading my content!</p>
        <div className="flex gap-8">
          <div className="flex items-center"> <div className="w-8 h-8 mr-4 "><FontAwesomeIcon icon={faEnvelope} /></div> <p className="float-left text-lg" style={poppins.style}>ismailaltin1821@gmail.com</p></div>
          <div className="flex items-center"> <div className="w-8 h-8 mr-4 "><FontAwesomeIcon icon={faInstagram} /></div> <p className="float-left text-lg" style={poppins.style}>isma1l_altn</p></div>
        </div>
      </footer>
    </div>
  )
}

export default Home
