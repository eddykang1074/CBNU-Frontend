//pages폴더내에서 제공되는 모든 페이지 컴포넌트(_document.tsx만제외) 는
//최상위 부모컴포넌트로 _app.tsx파일로 감싸져서 제공됩니다.
//_app.tsx파일에서 전체 화면 레이아웃을 구성하거나 전역 CSS파일을 적용합니다.
//페이지별 공통 레이아웃 구성 및 유지가능
//자식 컴포넌트 구성 가능

//리액트 넥스트 프론트앱의 전역 스타일시트 참조 및 적용
import '@/styles/globals.css';

//NextApp의 최상위 App컴포넌트의  타입인 AppProps 참조하여 기본 props 값과
//자식(콘텐츠) 컴포넌트를 파라메터로 받아서 App컴포넌트를 생성

import type { AppProps } from 'next/app';

//현재 사용자 URL라우팅주소 분석을 위한 useRouter 훅 참조
import { useRouter } from 'next/router';

//레이아웃 구성 재사용 컴포넌트 참조하기
import Header from '@/components/header';
import Footer from '@/components/footer';

//Base/Auth Layout 컴포넌트 참조하기
import BaseLayout from '@/components/base-layout';
import AuthLayout from '@/components/auth-layout';

export default function App({ Component, pageProps }: AppProps) {
  //Component는 App컴포넌트내에 포함(출력)되는 자식 컴포넌트를 의미한다.
  //자식 컴포넌트에 최상위 App컴포넌트의 각종 props의 복사본을 자식에게 전달함

  const router = useRouter();

  //현재 웹브라우저의 URL주소 경로정보조회
  ///blogs/1,/mypage/profile,/mypage/settings/config
  const currentPath = router.pathname;
  console.log('현재 URL경로:', currentPath);

  return (
    // <>
    //   {/* 상단헤더 GNB영역 */}
    //   <Header />

    //   {/* 주소가 변경될떄마다 바뀌는 페이지 컴포넌트 출력영역 */}
    //   <Component {...pageProps} />

    //   {/* 하단 풋터 공통영역 */}
    //   <Footer />
    // </>

    // <>
    // <BaseLayout>
    //   <Component {...pageProps} />
    // </BaseLayout>
    // </>

    // 사용자가 접속한 URL경로에 따라서 레이아웃을 다르게 구성하기
    <>
      {currentPath.includes('/mypage') ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      )}
    </>
  );
}
