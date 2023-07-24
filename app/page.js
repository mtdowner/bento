import Image from 'next/image'
import Zelda from '../zelda.jpeg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <img alt="" src="https://ca.slack-edge.com/T6VL1BSEA-U02ET0TNB8U-b90320428ff0-512" className='w-40 rounded-full'></img>
      <h1 className='font-Roboto-Mono font-medium text-center pt-4'>
        @exrlla
      </h1>
      <p className='font-Roboto-Mono text-gray-700 text-center'>curriculum intern @ codédex</p>

      <div className='my-10'>
        <a className='rounded-full border-gray-500 border-2 flex justify-between py-1'>
          <Image alt='' src={Zelda} width={80} className='rounded-full ml-1'/>
          <button className='mx-60'>
            i went to the figma conference in SF! :D 
          </button>
        </a>
      </div>
    </main>
  )
}
