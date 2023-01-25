import Head from 'next/head';
import Form from '../components/Form';
import { useState } from 'react';
import TodoList from '../components/TodoList';


export default function Home() {

  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);

  return (
    <>
      <Head>
        <title>TooDoo</title>
        <meta name="description" content="A custom To-Do web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className='font-poppins h-full min-h-screen py-8'>
        <Form inputText={inputText} setInputText={setInputText} todolist={todolist} setTodolist={setTodolist}/>
        <TodoList todolist={todolist} setTodolist={setTodolist}/>
      </div>
    </>
  )
}
