import { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck,  } from 'react-icons/ai'
import { MdOutlinePriorityHigh } from 'react-icons/md'
import { toast } from 'react-toastify';

export default function Todo({todo, todolist, setTodolist}){

    const [editing, setEditing] = useState(false);

    //Delete todo item
    const deleteHandler = () => {
        setTodolist(todolist.filter((todoitem) => todoitem.id != todo.id));
        toast.clearWaitingQueue();
        toast.error("You deleted a to-do item", {
            position: 'top-center',
            autoClose: 750,
        })
    };

    //Toggle edit mode
    const editToggle = () => {
        setEditing(!editing);
        if(editing){
            toast.clearWaitingQueue();
            toast.success("You edited a to-do item", {
                position: 'top-center',
                autoClose: 750,
            });  
        }
    }

    //Edit todo item
    const editHandler = (e) => {
        setTodolist(todolist.map(todoitem => {
            if(todoitem.id === todo.id){
                return {
                    ...todoitem, content: e.target.value
                }
            }
            return todoitem;
        }))
    }

    //Complete todo item
    const completeHandler = () => {
        setTodolist(todolist.map((todoitem) => {
            if(todoitem.id === todo.id){
                if(!todoitem.completed){
                    toast.clearWaitingQueue();
                    toast.success("You completed a to-do item.", {
                    position: "top-center",
                    autoClose: 750
                    });
                }else {
                    toast.clearWaitingQueue();
                    toast.success("You removed a to-do item from your completed list.", {
                        position: "top-center",
                        autoClose: 750
                    });
                }
                return {
                    ...todoitem, completed: !todoitem.completed,
                }
            }
            return todoitem;
        }))
    };

    //Prioritize todo item
    const priorityHandler = () => {
        setTodolist(todolist.map(todoitem => {
            if(todoitem.id === todo.id){
                if(!todoitem.priority){
                    toast.clearWaitingQueue();
                    toast.success("You added a to-do item to your priority list.", {
                    position: "top-center",
                    autoClose: 750
                    });
                }else {
                    toast.clearWaitingQueue();
                    toast.success("You removed a to-do item from your priority list.", {
                        position: "top-center",
                        autoClose: 750
                    });
                }
                return {
                    ...todoitem, priority: !todoitem.priority
                }
            }
            return todoitem;
        }))
    }

    return (
        <div className='w-full flex flex-col h-auto' >
            <p className="text-sm text-gray-300">{todo.timestamp}</p>
            <div className='text-lg text-white m-2 p-4 break-all'>
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
            <div className="flex justify-end gap-6">
                <button className={`${todo.priority ? "text-white" : ""} ${todo.completed ? "hidden" : ""}`} onClick={priorityHandler}><MdOutlinePriorityHigh /></button>
                <button className={todo.completed ? "text-white" : ""} onClick={completeHandler}><AiOutlineCheck /></button>
                <button className={`${editing ? "text-white" : ""} ${todo.completed ? "hidden" : ""}`} onClick={editToggle} ><AiOutlineEdit /></button>
                <button className="" onClick={deleteHandler} ><AiOutlineDelete /></button>
            </div>
            
        </div>
    );
}