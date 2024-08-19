//NextJSApp 전역 스타일  파일 참조하기
import '@/styles/globals.css';

// Next.js에서 제공하는 AppProps 타입을 불러옵니다.
import type { AppProps } from 'next/app';

//개발자 정의 컴포넌트 참조하기
import MainLayout from '@/components/main-layout';
import NoneLayout from '@/components/none-layout';
import MyPageLayout from '@/components/mypage-layout';

import { useRouter } from 'next/router';

// import Header from '@/components/header';
// import Container from '@/components/container';
// import Footer from '@/components/footer';

//App 함수는 컴포넌트와 pageProps를 인자로 받아서 JSX를 반환합니다.
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath: string = router.pathname;
  console.log('currentPath:', currentPath);

  let layoutMode: string = 'general';
  if (currentPath === '/login' || currentPath === '/regist') {
    layoutMode = 'auth';
  } else if (currentPath.indexOf('/mypage') > -1) {
    layoutMode = 'mypage';
  } else {
    layoutMode = 'general';
  }

  console.log('layoutMode:', layoutMode);

  const renderLayoutOnPath = () => {
    switch (layoutMode) {
      case 'auth':
        return <Component {...pageProps} />;
      case 'mypage':
        return (
          <MyPageLayout>
            <Component {...pageProps} />
          </MyPageLayout>
        );
      default:
        return (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        );
    }
  };

  //Component는 현재 페이지 컴포넌트를 나타냅니다.
  //pageProps는 현재 페이지 컴포넌트에 전달되는 초기 props를 나타냅니다.
  //초기 props는 getServerSideProps 또는 getStaticProps,getInitialProps를 통해 가져올 수 있습니다.
  //페이지 요청시 마다 Component 내용은 변경됩니다.
  // ...pageProps는 pageProps 객체 복사본을 Component로 전달합니다.
  return (
    // <div className="bg-white">
    //   <Header />
    //   <Component {...pageProps} />
    //   <Footer />
    // </div>

    // <Container>
    //   <Header />
    //   <Component {...pageProps} />
    //   <Footer />
    // </Container>

    // <MainLayout>
    //   <Component {...pageProps} />
    // </MainLayout>

    // <>
    //   {currentPath === '/login' || currentPath === '/regist' ? (
    //     <Component {...pageProps} />
    //   ) : (
    //     <MainLayout>
    //       <Component {...pageProps} />
    //     </MainLayout>
    //   )}
    // </>

    <>{renderLayoutOnPath()}</>
  );
}
