import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import TitleGlitch from './components/TitleGlitch/TitleGlitch'
import { FaGithub } from 'react-icons/fa'
import SocialMedia from './components/SocialMedia/SocialMedia'


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
      <div className="">
        <TitleGlitch text={t('development.name')} />
        <span>Browser Language: {lng}</span>
          <SocialMedia />
      </div>
      <div className="">
        <h1>Image</h1>
      </div>
    </main>
  )
}

export default App
