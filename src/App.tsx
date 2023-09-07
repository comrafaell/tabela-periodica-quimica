import './styles/global.css'
import { Tabela } from './components/Tabela'
import { Header } from './components/Header'
import { Subtitle } from './components/Subtitle';
import { Footer } from './components/Footer';
import { Print } from './components/Print';

export function App() {
  return (
    <div className=' flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col items-center gap-4'>

        <Header />

        <Print />

        <Tabela />

        <Subtitle />

        <Footer />
        
      </div>
    </div>
  )
}


