import "@/styles/globals.css";
import type { AppProps } from "next/app";

//전역상태 영역 생성을 위한 참조하기
//createContext함수를 이용해 전역 상태 공간을 App.tsx컴포넌테 생성합니다.
import { createContext, useState } from "react";

//단일 문자열 전역데이터를 보관하는 컨텍스트 영역 생성하기
//createContext('관리하려는전역상태데이터 지정-문자,숫자,객체무관');
export const AppContext = createContext({
  msg: "",
  setMsg: (msg: string) => {},
});

//Context영역에서 관리하는 데이터 제공 컴포넌트 함수 생성
function MsgProvider({ children }: { children: React.ReactNode }) {
  //전역으로 관리할 데이터 구조생성
  const [msg, setMsg] = useState("기본값");
  return (
    <AppContext.Provider value={{ msg, setMsg }}>
      {children}
    </AppContext.Provider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MsgProvider>
      {/* //레이아웃 컴포넌트포함 */}
      <Component {...pageProps} />
    </MsgProvider>
  );
}
