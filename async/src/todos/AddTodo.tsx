import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {

    const [title, setTitle] = useState<string>('');
    const navigate = useNavigate();
    // 로딩 상태 관리
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        //로딩시작
        setIsLoading(true);

        try{
            const response = 
                await axios.post("https://jsonplaceholder.typicode.com/todos",
                    {
                        title, completed:false
                    });
                    console.log("할 일 생성됨:", response.data);
                    setTitle('');
                    alert("할 일이 성공적으로 추가되었습니다.")
                    navigate('/');
        }catch(err){
            console.log(err);
            alert("오류발생!")            
        }finally{
            setIsLoading(false); //성공하든 실패하든 로딩 종료
        }
    }

    return(
        <div>
            <h2>할일 추가</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="할 일을 입력하세요"
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? '로딩 중...' : '추가'}                    
                </button>

            </form>
        </div>
    )
}

export default AddTodo