import { Tabela } from './Tabela'
import { Header } from './Header'
import { Subtitle } from './Subtitle';
import { Footer } from './Footer';


export function Pagina() {
    return (
        <div className=' flex justify-center items-center' style={{minHeight: '100vh'}}>
            <div className='w-full max-w-5xl px-6 flex flex-col items-center gap-3'>

                <Header />

                <Tabela />

                <Subtitle />

                <Footer />
                
            </div>
        </div>
    )
}