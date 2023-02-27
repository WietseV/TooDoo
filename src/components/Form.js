import { useState } from "react";
import { toast } from 'react-toastify';
import { GiBattery0, GiBattery25, GiBattery50, GiBattery75, GiBattery100 } from 'react-icons/gi';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../utils/firebase';

export default function Form({inputText, setInputText, todolist, setTodolist}){


    // handle the setTodo
    const setInputTextHandler = (e) => {
        setInputText(e.target.value);
        return;
    }

    //Add a todo item
    const addTodo = async(e) => {
        //prevent page refresh
        e.preventDefault();
        if(todolist.length < 50){
            // setTodolist([...todolist, {content: inputText, priority: false, completed: false, id: Math.random() * 50, timestamp: Date(Date.now()).toString() }]);
            const collectionRef = collection(db, 'todolist');
            await addDoc(collectionRef, {
                ...todolist, 
                user: auth.currentUser.uid,
                content: inputText, 
                priority: false, 
                completed: false, 
                id: Math.random() * 50, 
                timestamp: Date(Date.now()).toString() 
            });
            toast.clearWaitingQueue();
            toast.success("You added a to-do item", {
                position: 'top-center',
                autoClose: 1000,
            })
        }else {
            toast.clearWaitingQueue();
            toast.error("The maximum amount of to-do items you can add is 50. Please remove some before you can add more.", {
                position: 'top-center',
                autoClose: 1500,
            })
        }
        setInputText("");
    }

    return (
        <div className="max-w-7xl shadow-lg xl:mx-auto flex justify-center bg-white bg-opacity-50 my-4 mx-2">
            <div className="w-1/3 hidden sm:flex"></div>
            <form  onSubmit={addTodo} className="lg:w-1/3 p-4 flex flex-col items-center">
                <h1 className=' text-3xl font-medium my-4 gradient text-white skew-y-2 px-4 p-2'><span className="-skew-y-2">TooDoo</span></h1>
                <div className="flex pt-3">
                    <input onChange={setInputTextHandler} type="text" maxLength='450' placeholder="New thing to do" value={inputText} name="todo" id="todo" required className="w-full border-b-2 border-gray-600 outline-none bg-transparent p-2 text-sm placeholder:text-gray-700 text-black"></input>
                    <button type="submit" className="p-2 gradient text-white">Add</button>
                </div>
            </form>
            <div className="w-1/3 sm:flex items-center justify-end pr-4 hidden">
                <p className="text-sm">{todolist.length}/50</p>
                <GiBattery0 size={50} className={todolist.length <= 0 ? "visible" : 'hidden'} />
                <GiBattery25 size={50} className={1 <= todolist.length && todolist.length <= 24 ? "visible" : 'hidden'} />
                <GiBattery50 size={50} className={25 <= todolist.length && todolist.length <= 36 ? "visible" : 'hidden'} />
                <GiBattery75 size={50} className={37 <= todolist.length && todolist.length <= 49 ? "visible" : 'hidden'} />
                <GiBattery100 size={50} className={todolist.length == 50 ? "visible" : 'hidden'} />
            </div>
        </div>
    );
}