import '@/styles/globals.css'
import Image from 'next/image';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <div>
    <Image src="/images/background.jpg"
            alt="background image"
            width={2000}
            height={1080}
            className="fixed object-cover w-screen h-screen"
            />
      <ToastContainer limit={5}/>
      <Component {...pageProps} className="z-10"/>
    </div>
    </>
    
  ) 
}
