import './styles/global.css'
import { Tabela } from './components/Tabela'
import { Header } from './components/Header'
import { Subtitle } from './components/Subtitle';
import { Footer } from './components/Footer';
import generatePDF, { Margin, Resolution } from 'react-to-pdf';

const personalizacao = {
  filename: "tabela-periodica.pdf", 
  method: "open",
  resolution: Resolution.HIGH,
  page: {
    margin: Margin.NONE,
    format: "A4",
    orientation: "landscape",
  }
}

const recuperarConteudo = () => document.getElementById('conteudo');

export function App() {
  return (
    <div>

      <button 
        className='text-sm font-bold bg-slate-500 hover:bg-slate-600 px-6 py-2 rounded text-white shadow fixed right-60 bottom-80'
        onClick={() => generatePDF(recuperarConteudo, personalizacao)}
      >    
        PDF 
      </button>

      <div id='conteudo' className=' flex justify-center items-center'>
        <div className='w-full max-w-5xl px-6 flex flex-col items-center gap-4'>

          <Header />

          <Tabela />

          <Subtitle />

          <Footer />
          
        </div>
      </div>

    </div>
  )
}


