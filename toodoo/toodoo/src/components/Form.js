import { useState } from "react"
import { toast } from 'react-toastify';

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
            <form  onSubmit={addTodo} className="p-4 flex flex-col">
                <h1 className='text-2xl font-medium py-4 gradient bg-clip-text text-transparent'>TooDoo</h1>
                <div>
                    <input onChange={setInputTextHandler} type="text" placeholder="New thing to do" value={inputText} name="todo" id="todo" required className="outline-none bg-purple-100 p-2 text-sm"></input>
                    <button type="submit" className="p-2 bg-purple-300 text-white">Add</button>
                </div>
            </form>
        </div>
    );
}