/* eslint-disable no-unused-vars */
import { useState } from "react"
import { experiencesData } from "../utils/experiencesData";

export function Experiences() {
  const [activeButton, setActiveButton] = useState(0);
  
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex)
  }

  return (
   <div className='w-[350px] h-[850px] lg:h-[600px] lg:w-[1090px] mb-20'>
    <h1 className='mt-20 mb-16 text-white font-archivo text-4xl font-semibold'>Experiências <span className='text-green'>.</span></h1>
    <div className='lg:flex'>
      <div className='lg:w-[500px]'>
        {
          experiencesData.map((experience, index) => (
            <button
              key={experience.id} 
              className={`experience ${activeButton === index ? 'active' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {experience.label}
            </button>
          ))
        }
      </div>
      {
        activeButton !== null && (
          <div className='w-full mt-10 lg:mt-0'>
            <h1 className='font-medium text-2xl font-archivo'>{experiencesData[activeButton].title}</h1>
            <p className='text-zinc-400 font-archivo text-lg mt-6'>{experiencesData[activeButton].date}</p>
            <h2 className='font-archivo text-xl text-green mt-6'>{experiencesData[activeButton].label}</h2>
            <p className='text-zinc-400 font-archivo text-lg mt-6'>{experiencesData[activeButton].content}</p>
          </div>
        )
      }
    </div>
   </div>
  )
}