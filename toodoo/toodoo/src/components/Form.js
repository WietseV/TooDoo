import { useState } from "react"
import { toast } from 'react-toastify';
import { GiBattery0, GiBattery25, GiBattery50, GiBattery75, GiBattery100 } from 'react-icons/gi'

export default function Form({inputText, setInputText, todolist, setTodolist}){


    // handle the setTodo
    const setInputTextHandler = (e) => {
        setInputText(e.target.value);
        return;
    }

    //Add a todo item
    function addTodo(e) {
        //prevent page refresh
        e.preventDefault();
        if(todolist.length < 50){
            setTodolist([...todolist, {content: inputText, priority: false, completed: false, id: Math.random() * 50, timestamp: Date(Date.now()).toString() }]);
            toast.clearWaitingQueue();
            toast.success("You added a to-do item", {
                position: 'top-center',
                autoClose: 750,
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
        <div className="max-w-7xl shadow-lg mx-auto flex justify-center bg-white my-4">
            <div className="w-1/3"></div>
            <form  onSubmit={addTodo} className="p-4 flex flex-col">
                <h1 className='w-1/3 text-2xl font-medium py-4 gradient bg-clip-text text-transparent'>TooDoo</h1>
                <div>
                    <input onChange={setInputTextHandler} type="text" placeholder="New thing to do" value={inputText} name="todo" id="todo" required className="outline-none bg-purple-100 p-2 text-sm"></input>
                    <button type="submit" className="p-2 bg-purple-300 text-white">Add</button>
                </div>
            </form>
            <div className="w-1/3 flex items-center justify-end pr-4">
                <GiBattery0 size={50} className={todolist.length <= 12 ? "visible" : 'hidden'} />
                <GiBattery25 size={50} className={13 <= todolist.length && todolist.length <= 24 ? "visible" : 'hidden'} />
                <GiBattery50 size={50} className={25 <= todolist.length && todolist.length <= 36 ? "visible" : 'hidden'} />
                <GiBattery75 size={50} className={37 <= todolist.length && todolist.length <= 49 ? "visible" : 'hidden'} />
                <GiBattery100 size={50} className={todolist.length == 50 ? "visible" : 'hidden'} />
            </div>
        </div>
    );
}