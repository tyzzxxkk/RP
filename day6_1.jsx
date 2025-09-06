import { useState } from "react";

export default function App() {
    const [text, setText] = useState("");
    return (
        <div>
            <input 
            type="text"
            placeholder="글자를 입력하세요"
            onChange={(e) => setText(e.taeget.value)}
            />
            <p>입력값 : {text}</p>
        </div>
    );
}