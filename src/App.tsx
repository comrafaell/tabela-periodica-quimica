import './styles/global.css'
import { Tabela } from './components/Tabela'
import { Header } from './components/Header'
import { Subtitle } from './components/Subtitle';

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-6'>

        <Header />

        <Tabela />

        <Subtitle />
        
      </div>
    </div>
  )
}


