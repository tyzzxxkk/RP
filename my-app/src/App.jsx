// export default function App() {
//   return <h1>Hello React</h1>
// }

// import { useState } from "react";

// export default function App() {
//   return <h1>안녕, 리액트!</h1>
// }

// export default function App() {
//   const name = "태연";
//   return <h1>{name}</h1>;
// }

// export default function App() {
//     return <header><h2>헤더입니다</h2></header>
//   }
  
// export default function App() {
//     return (
//     <div>
//         <header><h1>헤더</h1></header>
//         <footer><h1>푸터</h1></footer>
//     </div>
//     );
// }

// import Greeting from "./components/Greeting"
// import Button from "./components/Button"

// export default function App() {
//     return (
//         <div>
//             <Greeting name="태연"/>
//             <Button text="확인"/>
//         </div>
//     )
// }

// import { useState } from "react";

// export default function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h2>카운터 : {count}</h2>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//         </div>
//     );
// }

// import { useState } from "react";

// export default function App() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <button onClick={() => setIsOn(!isOn)}>
//       {isOn ? "ON" : "OFF"}
//     </button>
//   );
// }

// import { useState } from "react";

// export default function App() {
//     const [text, setText] = useState("");
//     return (
//         <div>
//             <input 
//             type="text"
//             placeholder="글자를 입력하세요"
//             onChange={(e) => setText(e.taeget.value)}
//             />
//             <p>입력값 : {text}</p>
//         </div>
//     );
// }

// import { useState } from "react";

// export default function LikeButton() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       👍 좋아요 {count}
//     </button>
//   );
// }

// import { useState } from "react";

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (input.trim() === "") return;
//     setTodos([...todos, input]);  // 기존 리스트에 추가
//     setInput(""); // 입력창 비우기
//   };

//   return (
//     <div>
//       <h2>할 일 목록</h2>
//       <input 
//         type="text" 
//         value={input}
//         placeholder="할 일을 입력하세요"
//         onChange={(e) => setInput(e.target.value)} 
//       />
//       <button onClick={addTodo}>추가</button>

//       <ul>
//         {todos.map((todo, i) => (
//           <li key={i}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
