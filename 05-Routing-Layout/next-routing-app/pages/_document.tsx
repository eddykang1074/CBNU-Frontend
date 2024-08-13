//SPA(SingleWebPageApplication)의 실체인 Single Web Html Page 를 만들어주는 파일
//Single Web Page(index.html)의 최상위 구조를 정의하는 파일
//html,head,body,<div id="__next"></div> 등의 구조를 정의하는 파일
//각종 next.js 실행을 위한 클라이언트 자바스크립트 파일 생성제공
//tailwind를 통해서 생성되는 각종 css 스타일 제공

//Html은 html태그를 생성
//Head는 head영역 태그 생성
//Main 컴포넌트는 <div id="__next">콘텐츠별 컴포넌트 html요소제공</div> 생성
//NextScript는 next.js 실행을 위한 클라이언트 자바스크립트 파일 생성제공

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
