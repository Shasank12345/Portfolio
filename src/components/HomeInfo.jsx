import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
    </div>
  )
}

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Shasank Singh Thakuri</span> 👋
      <br />
      A Computer Engineer from Nepal
    </h1>
  ),

  2: (
    <InfoBox
      text="I build systems that stay simple, efficient, and actually useful."
      link='/about'
      btnText='Learn more'
    />
  ),

  3: (
    <InfoBox
        text="I’ve led multiple projects—curious what impact they made?"
        link='/projects'
        btnText='Let’s see'
    />
    ),
  4: (<InfoBox
        text="Have ideas, questions, or just want to connect? Let’s make it happen."
        link='/contact'
        btnText='Get in Touch'
    />)
}

const HomeInfo = ({ CurrentStage }) => {
  return renderContent[CurrentStage] || null
}

export default HomeInfo
