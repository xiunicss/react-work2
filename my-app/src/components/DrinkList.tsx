import { useState } from "react"

const DrinkList = () => {
    const [drinks, setDrinks] = 
            useState<string[]>(['콜라', '사이다', '커피'])

    //음료 추가 핸들러
    const addDrink = () => {
        const newDrink = prompt('추가할 음료를 입력하세요')
        if(newDrink){
            // [전개연산자(...)로 복사, 새요소]
            setDrinks([...drinks, newDrink])
        }
    }

    return(
        <div>
            <h2>음료 리스트</h2>
            <ul>
                {drinks.map((drink, idx) => (
                    <li key={idx}>{drink}</li>
                ))}
            </ul>
            <button onClick={addDrink}>음료 추가</button>
        </div>
    )
}

export default DrinkList