import Head from 'next/head';
import { auth } from '@/utils/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


export default function Login() {

    const googleProvider = new GoogleAuthProvider();
    const router = useRouter();
    const [user, loading] =  useAuthState(auth);

    const GoogleLogin = async() => {
        try {
            if(user) return;
            await signInWithPopup(auth, googleProvider);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const checkUser = async () => {
        if(user) return router.push('/');
      }
    
      useEffect(() => {
        checkUser();
      }, [user, loading]);

    return (
        <>
        <Head>
            <title>Login - TooDoo</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='relative min-h-screen flex items-center'>
            <div className='flex flex-col justify-center max-w-xl mx-auto p-8 shadow-xl text-center bg-white bg-opacity-50'>
                <h1 className='text-3xl font-medium py-2 gradient bg-clip-text text-transparent '>TooDoo</h1>
                <p className='text-lg'>Time to get things done!</p>
                <div className='m-8'>
                    <button 
                    className='px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600 text-white '
                    onClick={GoogleLogin}>Log in with Google</button>
                </div>
            </div>
        </div>
        </>

    );
}