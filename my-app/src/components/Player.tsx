/*
const Player = ({player}: {
    player: {name: string; age: number}
}) => {

    return(
        <div>
            <h2>운동 선수</h2>
            <p>이름: {player.name}</p>
            <p>나이: {player.age}</p>
        </div>
    )
}
*/

// 객체 정의 타입1
/*  type PlayerProps = {
    player: {
        name: string;
        age:number
    }
    clickHandler: () => void
} */

// 객체 정의 타입2
interface PlayerProps{
    player: {
        name: string;
        age:number
    }
    clickHandler: () => void //return 값이 없음 void
}

const Player = ({player, clickHandler}: PlayerProps) => {

    return(
        <div>
            <h2>운동 선수</h2>
            <p>이름: {player.name}</p>
            <p>나이: {player.age}</p>

            <button onClick={clickHandler}>클릭!</button>
        </div>
    )
}
export default Player