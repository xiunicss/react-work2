import { useEffect, useState } from "react"
import type {Todo} from "./Todos"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TodoDetail = () => {
    // todos/2 -> "2"(문자)
    const {id} = useParams<{id: string}>();
    const [todo, setTodo] = useState<Todo | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchTodo = async () => {
            try{
                const response = 
                    await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                setTodo(response.data)
            }catch(err){
                alert("오류가 발생했습니다.");
                console.log(err);
                
            }
        }
        fetchTodo(); //호출
    }, [id])

    //todo가 아직 로딩되지 않았을 때 로딩 메시지 표시
    if(!todo){
        return <div>로딩 중...</div>
    }

    return(
        <div>
            <h2>할 일 상세</h2>
            <p>ID: {todo.id}</p>
            <p>제목: {todo.title}</p>
            <p>완료여부: {todo.completed ? '완료' : '미완료'}</p>
            
            <button onClick={() => navigate(-1)} >뒤로가기</button>
        </div>

        
    )
}


export default TodoDetail