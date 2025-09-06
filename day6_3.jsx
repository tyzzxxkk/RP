import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);  // 기존 리스트에 추가
    setInput(""); // 입력창 비우기
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <input 
        type="text" 
        value={input}
        placeholder="할 일을 입력하세요"
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
