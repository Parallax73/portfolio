/* eslint-disable no-unused-vars */
import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Knowledge } from './components/Knowledge';
import { Main } from './components/Main';
import { Projects } from './components/Projects';
import './styles/global.css';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <hr className='border-zinc-700 lg:hidden mb-20'/>
      <section className='flex flex-col items-center mb-20'>
        <About />
      </section>
      <hr className='border-zinc-700 lg:hidden'/>
      <section className='bg-secondBackground flex flex-col items-center'>
        <Experiences />
      </section>
      <hr className='border-zinc-700 lg:hidden'/>
      <section className='flex flex-col items-center mb-20 mt-20'>
        <Projects />
      </section>
      <hr className='border-zinc-700 lg:hidden'/>
      <section className='bg-secondBackground flex flex-col items-center'>
        <Knowledge />
      </section>
      <hr className='border-zinc-700 lg:hidden'/>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
