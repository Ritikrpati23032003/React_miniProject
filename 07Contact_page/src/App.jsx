import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHead from './components/ContactHead/ContactHead';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
     <Navigation />
     <main className='main_container'>
     <ContactHead />
     <ContactForm />
     </main>
   
    </div>
  )
}

export default App
