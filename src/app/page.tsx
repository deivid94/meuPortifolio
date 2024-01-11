import Image from 'next/image'
import { Header } from './components/header/header'
import { Experience } from './components/experience/experience'
import { Info } from './components/information/information'
import { EmailIcon } from './components/icons/email-icon'
import { SocialButtons } from './components/social-buttons/social-buttons'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
     <Header/>
      <Experience/>
      <Info/>
      <div className="buttons">
        <SocialButtons/>
        <button className="primary-btn">
          Contact Me
          <EmailIcon/>
          </button>
      </div>
     
   
     
    </main>
  )
}
