import React from 'react'
import Typical from 'react-typical'
export default function Home() {
  return (
    <div>
      <Typical 
      steps ={['Bienvenue',1000,'Bienvenue à tous',1000]}
      loop={Infinity}
      wrapper="p"/>
    </div>
  )
}