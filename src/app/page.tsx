// app 폴더 안의 모든 컴포넌트는 서버컴포넌트이다
// 서버에서 동작하는 컴포넌트이므로 브라우저 API는 사용 안됨, 노드 API는 사용 가능
// 서버에서 작동하는 코드를 클라이언트로 전달할 필요가 없으므로 클라이언트로 전달되는 번들사이즈가 줄어든다.
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
