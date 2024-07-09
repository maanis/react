import { useContext, useEffect, useState } from "react";
import { todoContext } from "../contexts/todoContext";

function TodoItem() {

    // const [isComplete, setIsComplete] = useState(false)
    const { todo, setTodo, count, setCount, handleAdd } = useContext(todoContext)

    function handleComplete(e) {

        let i = (e.target.name)

        let newTodo = [...todo]
        todo[i].isComplete = !todo[i].isComplete
        setTodo(newTodo)
    }
    function handleEditable(e) {

        let i = (e.target.name)

        let newTodo = [...todo]
        todo[i].readOnly = !todo[i].readOnly
        setTodo(newTodo)
        // console.log(todo)
    }

    function handleEdit(e) {
        let i = e.target.name
        // setTodo(...todo, todo[i].task = e.target.value)
        let newTodo = [...todo]
        todo[i].task = e.target.value
        setTodo(newTodo)
        // console.log(todo)
    }

    function handleDelete(e) {
        let i = e.target.name
        let filteredTodo = todo.filter((e) => {
            return e.id != i
        })

        setTodo(filteredTodo)
    }

    return (
        <>
            {todo.map((item) => {
                return (
                    <div key={item.id} className={`flex border  border-black/10 rounded-lg px-3 w-full py-1.5 gap-x-3 shadow-sm  duration-300  text-black `}>
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            name={item.id}
                            checked={item.isComplete}
                            onChange={handleComplete}

                        />
                        <input
                            type="text"
                            className={`outline-none w-full ${item.isComplete ? "line-through" : ""} bg-transparent rounded-lg text-white ${item.readOnly ? "cursor-default" : ""}`}
                            value={item.task}
                            name={item.id}
                            onChange={handleEdit}
                            readOnly={item.readOnly}
                        />

                        <button
                            name={item.id}
                            onClick={handleEditable}
                            className={`inline-flex  w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-zinc-700 hover:bg-zinc-900 shrink-0 ml-auto `}>

                            {item.readOnly ? "✒️" : "📄"}
                        </button>

                        <button
                            onClick={handleDelete}
                            name={item.id}
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 ml-auto">
                            ❌
                        </button>
                    </div>
                )
            })}
        </>


    );
}

export default TodoItem;
