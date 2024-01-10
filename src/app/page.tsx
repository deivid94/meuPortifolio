import Image from 'next/image'
import { Header } from './components/header/header'
import { Experience } from './components/experience/experience'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
     <Header/>
      <Experience/>
      <div className="info">
        <h3>Formacao Academica</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Analise & Desenvolvimento de Sistemas</span><br></br>
          <span>🎓</span>
          <span>Tecnico em Redes de Computadores</span>
        </div>
        
      </div>
      <div className="buttons">
        <div className="social">

        </div>
        <button>Fale Comigo</button>
      </div>
     
   
     
    </main>
  )
}
