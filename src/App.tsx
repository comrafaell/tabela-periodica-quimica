import './styles/global.css'
import { Tabela } from './components/Tabela'
import { Header } from './components/Header'

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full px-6 py-10 flex flex-col gap-6 overflow-x-hidden bg-sky-300'>

        <Header />

        <Tabela />
        
      </div>
    </div>
  )
}


