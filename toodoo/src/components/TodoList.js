import TodoItem from './Todo';

export default function TodoList({todolist, setTodolist}) {

    return (
        <div className='flex flex-col lg:flex-row xl:mx-auto max-w-7xl gap-2 mx-2'>
            <div className="lg:w-1/3 flex flex-col shadow-lg bg-white bg-opacity-50 p-2">
                <h2 className='p-4 text-center text-lg font-medium'>Priority items:</h2>
                <p className='flex justify-end px-4'>{todolist.filter((todoitem) => todoitem.priority == true).filter((todoitem) => todoitem.completed == false).length}/{todolist.length}</p>
                <ul className='my-4'> 
                    {todolist.filter((todoitem) => todoitem.priority == true).filter((todoitem) => todoitem.completed == false).map((priorityitem) => (
                        <div key={priorityitem.id} className=' flex flex-col m-4 p-2 rounded-lg shadow-lg prioritygradient'>
                            <TodoItem  todo={priorityitem} todolist={todolist} setTodolist={setTodolist}/>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='lg:w-2/3 flex flex-col sm:flex-row gap-2'>
                <div className="sm:w-1/2 flex flex-col shadow-lg bg-white bg-opacity-50 p-2">
                    <h2 className='p-4 text-center text-lg font-medium'>To-do items:</h2>
                    <p className='flex justify-end px-4'>{todolist.filter((todoitem) => todoitem.priority == false).filter((todoitem) => todoitem.completed == false).length}/{todolist.length}</p>
                    <ul className='my-4'>
                        {todolist.filter((todoitem) => todoitem.priority == false).filter((todoitem) => todoitem.completed == false).map((todoitem) => (
                            <div key={todoitem.id} className=' flex flex-col m-4 p-2 rounded-lg shadow-lg gradient'>
                                <TodoItem todo={todoitem} todolist={todolist} setTodolist={setTodolist}/>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="sm:w-1/2 flex flex-col shadow-lg bg-white bg-opacity-50 p-2">
                    <h2 className='p-4 text-center text-lg font-medium'>Completed items:</h2>
                    <p className='flex justify-end px-4'>{todolist.filter((todoitem) => todoitem.completed == true).length}/{todolist.length}</p>
                    <ul className='my-4'>
                        {todolist.filter((todoitem) => todoitem.completed == true).map((todoitem) => (
                            <div key={todoitem.id} className=' flex flex-col m-4 p-2 rounded-lg shadow-lg completedgradient'>
                                <TodoItem todo={todoitem} todolist={todolist} setTodolist={setTodolist}/>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}