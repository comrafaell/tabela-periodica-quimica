import './styles/global.css'
import { Tabela } from './components/Tabela'
import { Header } from './components/Header'
import { Subtitle } from './components/Subtitle';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col items-center gap-4'>

        <Header />

        <Tabela />

        <Subtitle />

        <Footer />
        
      </div>
    </div>
  )
}


