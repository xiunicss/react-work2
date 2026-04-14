import './App.css'
import Counter from './components/Counter'
import DrinkList from './components/DrinkList'
import Greet from './components/Greet'
import InputValueState from './components/InputValueState'
import Player from './components/Player'

function App() {
  //객체 선언 및 초기화
  /* const playerObj = {
    name: '신유빈',
    age: 22
  }

  const clickHandler = () => {
    alert("안녕하세요~")
  } */

  return (
    <>
      <section id="center">
        <h2>타입스크립트 기반 React</h2>
        {/* <Greet name="수현"/>*/}
        {/* <Player player={playerObj} clickHandler={clickHandler}/> */}
        {/* <Counter /> */}
        {/* <DrinkList /> */}
        <InputValueState />
      </section>
    </>
  )
}

export default App
