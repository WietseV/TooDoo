import Head from 'next/head';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import { db, auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { collection, query, onSnapshot, where } from 'firebase/firestore';


export default function Home() {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);

  const getData = async() => {
    if(loading) return;
    if(!user ) return router.push('/auth/login')
    else{
    const collectionRef = collection(db, 'todolist');
    const q = query(collectionRef, where('user', '==', user.uid))
    const unsubscribe = onSnapshot(q, (todoItem) => {
      setTodolist(todoItem.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
    return unsubscribe;
  }} 

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <>
      <Head>
        <title>TooDoo</title>
        <meta name="description" content="A custom To-Do web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {user &&
      <div  className='relative font-poppins h-full min-h-screen py-8 text-sm z-10'>
        <div className='w-full px-8 flex justify-end gap-4 text-black lg:text-white'>
          <div className='flex items-center gap-2'>
            <p>Welcome, {user?.displayName ? user?.displayName : "Guest"}</p>
          </div>
          <button 
          className=' hover:underline'
          onClick={() => {
            auth.signOut(); 
            }}>Sign out</button>
        </div>
        <Form inputText={inputText} setInputText={setInputText} todolist={todolist} setTodolist={setTodolist}/>
        <TodoList todolist={todolist} setTodolist={setTodolist}/>
      </div>
      }
    </>
  )
}
