import React from 'react'
import logoImage from '../assets/storyspace.png'

function Logo({width = "100%"}) {
  return (
    <img src={logoImage} style={{width}} alt="Logo placeholder" />
  )
}

export default Logo