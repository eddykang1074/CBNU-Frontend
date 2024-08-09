//전역 css파일 참조하여 리액트앱 전체 컴포넌트에서 행 스타일 사용가능
import '@/styles/globals.css';

//App 최상위 컴포넌트에 전달되는 파라메터의 타입참조하기
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // Component파라메터는 라우팅 주소에 따라 변경되는 컨텐츠 페이지 컴포넌트를 의미합니다.
  return <Component {...pageProps} />;
}
