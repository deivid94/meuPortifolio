import Image from 'next/image'
import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
     <Header/>
     <div className="experience">
      <h3>Experience</h3>
      <p>2 years working as a WebDeveloper, and 1 year working as a Networking operations center in companys such as MAIS INTERNET</p>
      <div className="experiencetime">

      </div>
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
     </div>
   
     
    </main>
  )
}
