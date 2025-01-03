import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import TitleGlitch from './components/TitleGlitch/TitleGlitch'
import { FaCss3Alt, FaDocker, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaLaravel, FaNode, FaPhp, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import SocialMedia from './components/SocialMedia/SocialMedia'
import imagePerfil from "./assets/Image_Perfil.png";
import Experience from './pages/Experiences/Experience'
import Proyectos from './pages/proyectos/Proyectos'
import { IoLogoJavascript } from 'react-icons/io'
import { IoTerminal } from 'react-icons/io5'
import { SiAngular, SiExpress, SiFastapi, SiMongodb, SiMysql, SiNestjs, SiSpringboot, SiSqlite, SiTypescript, SiUml } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { RiNextjsLine } from 'react-icons/ri'
import Terminal from './components/Terminal/Terminal'
import emailjs from 'emailjs-com';
import TitleRandom from './components/TitleRandom/TitleRandom'
import { GrTest } from 'react-icons/gr'
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

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const h2Element = document.querySelector("h2");

    const handleMouseOver = (event) => {
      let iterations = 0;
      const intervalT = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= event.target.dataset.value.length) {
          clearInterval(intervalT);
        }

        iterations += 1 / 3;
      }, 30);
    };

    h2Element.addEventListener("mouseover", handleMouseOver);

    return () => h2Element.removeEventListener("mouseover", handleMouseOver);
  }, []);

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
          <TitleRandom title={t('development.role')} className='role' />
          <SocialMedia />
        </article>
        <img src={imagePerfil} alt="" className='image-avatar' />
      </section>
      <Experience />
      <Proyectos />
      <section className='section-tecnologies'>
        <TitleRandom title='Tecnologías' className='section-title' />
        <article className='tecnologies'>
          <div className="technologies-card">
            <FaHtml5 />
          </div>
          <div className="technologies-card">
            <FaCss3Alt />
          </div>
          <div className="technologies-card">
            <IoLogoJavascript />
          </div>
          <div className="technologies-card">
            <FaJava />
          </div>
          <div className="technologies-card">
            <SiSpringboot />
          </div>
          <div className="technologies-card">
            <FaPhp />
          </div>
          <div className="technologies-card">
            <FaLaravel />
          </div>
          <div className="technologies-card">
            <FaReact />
          </div>
          <div className="technologies-card">
            <FaVuejs />
          </div>
          <div className="technologies-card">
            <SiAngular />
          </div>
          <div className="technologies-card">
            <SiTypescript />
          </div>
          <div className="technologies-card">
            <SiNestjs />
          </div>
          <div className="technologies-card">
            <RiNextjsLine />
          </div>
          <div className="technologies-card">
            <FaPython />
          </div>
          <div className="technologies-card">
            <SiFastapi />
          </div>
          <div className="technologies-card">
            <SiMysql />
          </div>
          <div className="technologies-card">
            <BiLogoPostgresql />
          </div>
          <div className="technologies-card">
            <SiSqlite />
          </div>
          <div className="technologies-card">
            <SiMongodb />
          </div>
          <div className="technologies-card">
            <SiUml />
          </div>
          <div className="technologies-card">
            <FaNode />
          </div>
          <div className="technologies-card">
          <GrTest />
          </div>
          <div className="technologies-card">
            <SiExpress />
          </div>
          <div className="technologies-card">
            <IoTerminal />
          </div>
          <div className="technologies-card">
            <FaDocker />
          </div>
          <div className="technologies-card">
            <FaGitAlt />
          </div>
          <div className="technologies-card">
            <FaFigma />
          </div>
          <div className="technologies-card">
            <FaGithub />
          </div>

        </article>
        {/* <Terminal /> */}
      </section>
      <section className='section-contact'>

        <form ref={formRef} onSubmit={sendData} className='form-contact'>
          <div className="">
            <h2 >Cuentame Tu Idea</h2>
            <p>No dudes en contactarme para cualquier consulta 💡, colaboración 🤝 o para discutir proyectos 🚀. Estoy aquí para ayudarte y explorar cómo puedo apoyar tus necesidades de desarrollo 🛠️. Puedes comunicarte conmigo por teléfono 📞, correo electrónico 📧 o completando el formulario de contacto a continuación 📝.<b>¡Espero saber de ti pronto! 🌟</b></p>
          </div>
          <div className="contact-inputs">
            <div className="">
              <label htmlFor="name">Nombre Completo <span className='important' >*</span></label>
              <input type="text" name="name" autoComplete='off' onChange={(e) => updateData({ "name": e.target.value })} required />
            </div>
            <div className="">
              <label htmlFor="email">Correo <span className='important' >*</span></label>
              <input type="email" name="email" autoComplete='off' onChange={(e) => updateData({ "email": e.target.value })} required />
            </div>
            <div className="">
              <label htmlFor="phone">Número telefónico</label>
              <input type="text" name="phone" onChange={(e) => updateData({ "phone": e.target.value })} />
            </div>
            <div className="">
              <label htmlFor="matter">Asunto <span className='important' >*</span></label>
              <input type="text" name="matter" onChange={(e) => updateData({ "matter": e.target.value })} required />
            </div>
            <div className="">
              <label htmlFor="message">Mensaje <span className='important' >*</span></label>
              <textarea name="message" onChange={(e) => updateData({ "message": e.target.value })} required></textarea>
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="footer-about">
          <h3>Albert Ospina</h3>
          <p>Desarrollador Fullstack | Apasionado por la tecnología y el aprendizaje continuo. &copy; 2025 Todos los Derechos Reservados</p>
        </div>
      </footer>


    </main>
  )
}

export default App
