// use client라고 선언해주면 클라이언트 컴포넌트가 됨
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("🔴client");
  return (
    <>
      <p>{count}</p>
      {/* 브라우저상에서 하이드레이션이 일어나기 전에는 setCount 콜벡은 실행되지 않음 */}
      <button onClick={() => setCount((num) => num + 1)}>
        Increase Number
      </button>
    </>
  );
}
