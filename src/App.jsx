import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  // Array di articoli (id e titolo)
  const articles = [
    { id: 1, title: "Come iniziare con il minimalismo digitale" },
    { id: 2, title: "10 ricette veloci per cene infrasettimanali" },
    { id: 3, title: "Guida pratica al lavoro remoto produttivo" },
    { id: 4, title: "Fotografia urbana: catturare la città di notte" },
    { id: 5, title: "Sostenibilità in casa: piccoli cambiamenti, grande impatto" },
    { id: 6, title: "Imparare JavaScript: consigli per i primissimi passi" },
    { id: 7, title: "Viaggiare low-cost: itinerari per il weekend" },
    { id: 8, title: "Mindfulness quotidiana per ridurre lo stress" },
    { id: 9, title: "Coltivare un orto sul balcone: guida per principianti" },
    { id: 10, title: "Design di interfacce: regole per una UX efficace" },
    { id: 11, title: "Libri da leggere prima dei 30 anni" },
    { id: 12, title: "Organizzare il tempo: tecniche di pianificazione settimanale" }
  ]

  return (

    <>

      <Header />

      <Main array={articles} />

      <Footer />

    </>
  )
}

export default App
