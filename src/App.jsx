import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import TitleGlitch from './components/TitleGlitch/TitleGlitch'
import { FaGithub } from 'react-icons/fa'
import SocialMedia from './components/SocialMedia/SocialMedia'
import imagePerfil from "./assets/image-perfil.png";
import Experience from './pages/Experiences/Experience'
import Proyectos from './pages/proyectos/Proyectos'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;


  return (
    <main>
      <section className='content-main'>
        <article className="information-content">
          <TitleGlitch text={t('development.name')} />
          <h2 className='role'>{t('development.role')}</h2>
          <SocialMedia />
        </article>
        <article className="content-image">
          <img src={imagePerfil} alt="" />
        </article>
      </section>
      <Experience />
      <Proyectos />
      <footer>
        <p> &copy; 2024 Stive Ospina </p>
      </footer>
    </main>
  )
}

export default App
