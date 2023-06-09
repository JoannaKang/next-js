// app 폴더 안의 모든 컴포넌트는 서버컴포넌트이다
// 서버에서 동작하는 컴포넌트이므로 브라우저 API는 사용 안됨, 노드 API는 사용 가능
// 상태를 저장하는 코드 (e.g. useState)를 사용할 수 없다.

import Counter from "../components/Counter";

export default function Home() {
  console.log("🟡server");
  return (
    <>
      <h1>Homepage</h1>
      <Counter />
    </>
  );
}
