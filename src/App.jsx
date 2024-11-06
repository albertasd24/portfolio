import { useEffect, useRef, useState } from 'react'
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
import emailjs from 'emailjs-com';
function App() {
  const { t, i18n } = useTranslation()
  const formRef = useRef();  // Añadir referencia para el formulario
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: ''
  });

  const updateData = (data) => {
    setForm({ ...form, ...data })
  }

  const sendData = (e) => {
    e.preventDefault();
    console.log(form);

    emailjs.sendForm('service_gnqhs2f', 'template_z46px2c', formRef.current, 'tGv94dHnsHmbsh8WO')
      .then((result) => {
        console.log('Correo enviado:', result.text);
      })
      .catch((error) => {
        console.log('Error al enviar el correo:', error.text);
      });
  };
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
          <img src={imagePerfil} alt="" className='image-avatar' />
        </article>
        {/* <article className="content-image">
          <img src={imagePerfil} alt="" />
        </article> */}
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
        <form ref={formRef} onSubmit={sendData} className='form-contact'>
          <div className="contact-inputs">
            <div className="">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" name="name" onChange={(e) => updateData({ "name": e.target.value })} required />
            </div>
            <div className="">
              <label htmlFor="email">Correo</label>
              <input type="email" name="email" onChange={(e) => updateData({ "email": e.target.value })} required />
            </div>
            <div className="">
              <label htmlFor="phone">Número telefónico</label>
              <input type="text" name="phone" onChange={(e) => updateData({ "phone": e.target.value })} />
            </div>
            <div className="">
              <label htmlFor="matter">Asunto</label>
              <input type="text" name="matter" onChange={(e) => updateData({ "matter": e.target.value })} required />
            </div>
          </div>
          <div className="">
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" onChange={(e) => updateData({ "message": e.target.value })} required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <footer>
        <p> &copy; 2024 Stive Ospina </p>
      </footer>
    </main>
  )
}

export default App
