import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import TitleGlitch from './components/TitleGlitch/TitleGlitch'
import { FaCss3Alt, FaDocker, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaLaravel, FaNode, FaPhp, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import SocialMedia from './components/SocialMedia/SocialMedia'
import imagePerfil from "./assets/image-perfil.png";
import Experience from './pages/Experiences/Experience'
import Proyectos from './pages/proyectos/Proyectos'
import { IoLogoJavascript } from 'react-icons/io'
import { IoTerminal } from 'react-icons/io5'
import { SiFastapi, SiMongodb, SiMysql, SiNestjs, SiSpringboot, SiSqlite, SiTypescript, SiUml } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { RiNextjsLine } from 'react-icons/ri'
import Terminal from './components/Terminal/Terminal'

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
      <section className='section-tecnologies'>
        <h2 className='section-title'>Tecnologías</h2>
        <article className='tecnologies'>

          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaJava />
          <SiSpringboot />
          <FaPhp />
          <FaLaravel />
          <FaVuejs />
          <SiTypescript />
          <SiNestjs />
          <RiNextjsLine />
          <FaReact />
          <FaPython />
          <SiFastapi />
          <SiMysql />
          <BiLogoPostgresql />
          <SiSqlite />
          <SiMongodb />
          <SiUml />
          <FaNode />
          <IoTerminal />
          <FaDocker />
          <FaFigma />
          <FaGitAlt />
          <FaGithub />
        </article>
        {/* <Terminal /> */}
      </section>
      <section className='section-contact'>
        <h2 className='section-title'>Contacto</h2>
        <form action="" className='form-contact'>
          <div className="contact-inputs">
            <div className="">
              <label htmlFor="">Nombre Completo</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label htmlFor="">Correo</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label htmlFor="">Número telefonico</label>
              <input type="text" name="" id="" />
            </div>
            <div className="">
              <label htmlFor="">Asunto</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="">
            <label htmlFor="">Mensaje</label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </section>
      <footer>
        <p> &copy; 2024 Stive Ospina </p>
      </footer>
    </main>
  )
}

export default App
