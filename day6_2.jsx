import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      👍 좋아요 {count}
    </button>
  );
}
