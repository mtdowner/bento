import Image from 'next/image'
import Jelly from '../jelly.gif'
import Spotify from '../spotify.png'
import Substack from '../substack.jpeg'
import Insta from '../insta.JPG'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <img alt="" src="https://ca.slack-edge.com/T6VL1BSEA-U02ET0TNB8U-b90320428ff0-512" className='w-40 rounded-full'></img>
      <h1 className='font-Roboto-Mono font-bold text-center pt-4 text-lg'>
        @exrlla
      </h1>
      <p className='font-Roboto-Mono text-gray-700 text-center'>curriculum intern @ codédex</p>
      
      <section className='max-w-4xl'>
      <div className='my-10'>
        <a className='rounded-full border-cyan-500 hover:border-cyan-600  hover:bg-blue-100 border-2 flex justify-between py-1'>
          <Image alt='' src={Spotify} width={80} className='rounded-full ml-1'/>
          <button className='mx-60 font-Roboto-Mono font-medium'>
           AUGUST VIBES: A PLAYLIST
          </button>
        </a>
      </div>

      <div className='mb-10'>
        <a className='rounded-full border-cyan-500 hover:border-cyan-600 hover:bg-blue-100 border-2 flex justify-between py-1'>
          <Image alt='' src={Substack} width={80} height={80}className='rounded-full ml-1'/>
          <button className='mx-auto font-Roboto-Mono font-medium'>
          the sea depths of the creative internet BLOG
          </button>
        </a>
      </div>

      <div id='button-3'>
        <a className='rounded-full border-cyan-500 hover:border-cyan-600 hover:bg-blue-100 border-2 flex justify-between py-1'>
          <Image alt='' src={Insta} width={80} className='rounded-full ml-1'/>
          <button className='mx-auto font-Roboto-Mono font-medium'>
           MY CODING INSTAGRAM 🧚🏼‍♂️🧚🏼‍♂️
          </button>
        </a>
      </div>

      </section>

      <Image alt='' src={Jelly} width={60} height={60} className='mt-40'></Image>
    </main>
  )
}
