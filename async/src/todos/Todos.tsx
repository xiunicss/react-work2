import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async() => {
            //방식 두개. try 와 get,then

            // try{실행문} catch(err){오류 처리 메세지}
            try{
                const response =
                    await axios.get("https://jsonplaceholder.typicode.com/todos")
                setTodos(response.data);
            }
            catch(err){
                alert("오류가 발생했습니다!")
                console.log(err);
                
            }
        }
        fetchTodos(); //함수 호출

        /*
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            setTodos(response.data);
        })
        .catch(err => console.log(err));
        */
    }, [])


    return(
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Link to={`/todos/${todo.id}`} >
                        {todo.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Todos