import { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck,  } from 'react-icons/ai'
import { MdOutlinePriorityHigh } from 'react-icons/md'
import { toast } from 'react-toastify';
import { db } from '../utils/firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default function Todo({todo, todolist, setTodolist}){

    const [editing, setEditing] = useState(false);

    //Delete todo item
    const deleteHandler = async () => {
        const docRef = doc(db, 'todolist', todo.id);
        await deleteDoc(docRef)
        toast.clearWaitingQueue();
        toast.error("You deleted a to-do item", {
            position: 'top-center',
            autoClose: 1000,
        })
    };

    //Toggle edit mode
    const editToggle = () => {
        setEditing(!editing);
        if(editing){
            toast.clearWaitingQueue();
            toast.success("You edited a to-do item", {
                position: 'top-center',
                autoClose: 1000,
            });  
        }
    }

    //Edit todo item
    const editHandler = async (e) => {
        const docRef = doc(db, 'todolist', todo.id);
        await updateDoc(docRef, {
            ...todo, content: e.target.value
            
        })
    }

    //Complete todo item
    const completeHandler = async () => {
        const docRef = doc(db, 'todolist', todo.id);
        await updateDoc(docRef, {
            ...todo, completed: !todo.completed
        })
    };

    //Prioritize todo item
    const priorityHandler = async () => {
        const docRef = doc(db, 'todolist', todo.id);
        await updateDoc(docRef, {
            ...todo, priority: !todo.priority
        })
    }

    return (
        <div className='w-full flex flex-col h-auto' >
            <p className="text-sm text-gray-300">{todo.timestamp}</p>
            <div className='text-lg text-white m-2 p-4 overflow-auto'>
                {!editing &&  
                <p className={todo.completed ? 'line-through' : ''}>{todo.content}</p>
                }
                {editing &&
                <textarea
                className=' bg-slate-100 p-2 bg-opacity-20 outline-none w-full resize-none'
                value={todo.content}
                onChange={editHandler}>{todo.content}</textarea>  
                }
            </div>
            <div className="flex justify-end gap-6 text-xl lg:text-base">
                <button className={`${todo.priority ? "text-white" : ""} ${todo.completed ? "hidden" : ""}`} onClick={priorityHandler}><MdOutlinePriorityHigh /></button>
                <button className={todo.completed ? "text-white" : ""} onClick={completeHandler}><AiOutlineCheck /></button>
                <button className={`${editing ? "text-white" : ""} ${todo.completed ? "hidden" : ""}`} onClick={editToggle} ><AiOutlineEdit /></button>
                <button className="" onClick={deleteHandler} ><AiOutlineDelete /></button>
            </div>
            
        </div>
    );
}