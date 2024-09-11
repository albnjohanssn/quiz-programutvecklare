import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';
export default function Home() {
  return (
    <main className='flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      <div className='pb-3 p-4 bg-zinc-50/30 backdrop-blur-md border-[3px] border-b-[6px] border-solid border-zinc-950 rounded-lg dark:bg-zinc-950/30 dark:border-zinc-50'>
        <Header />
        <div className='flex justify-center items-center'>
          <Link href='/quiz'>
            <button
              type='button'
              className='bg-white border-[3px] border-solid border-zinc-950 rounded-lg px-3 font-sans font-medium text-xl shadow-none text-zinc-950 not-italic no-underline normal-case tracking-normal leading-loose align-middle hyphens-none antialiased transition duration-100 ease-out hover:bg-zinc-950 hover:text-zinc-50 active:shadow-[0_5.5px_0.1px_0px_rgba(0,0,0,0.4)] dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-950 dark:hover:border-zinc-950 dark:active:shadow-[0_5.5px_0.1px_0px_rgba(255,255,255,0.4)]'
            >
              Start Quiz
            </button>
          </Link>
        </div>
        <div className='flex justify-center items-center mt-3'>
          <Footer />
        </div>
      </div>
    </main>
  );
}
