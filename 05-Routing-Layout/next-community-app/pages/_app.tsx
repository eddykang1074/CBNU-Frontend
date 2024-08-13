import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "@/components/main-layout";
import MyPageLayout from "@/components/mypage-layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath: string = router.pathname;
  console.log("currentPath:", currentPath);

  let layoutMode: string = "general";

  if (currentPath === "/login" || currentPath === "/regist") {
    layoutMode = "auth";
  } else if (currentPath.indexOf("/mypage") > -1) {
    layoutMode = "mypage";
  } else {
    layoutMode = "general";
  }

  console.log("layoutMode:", layoutMode);

  //UI요소를 반환하는 함수형 컴포넌트
  const renderLayoutOnPath = () => {
    switch (layoutMode) {
      case "auth":
        return <Component {...pageProps} />;
      case "mypage":
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

  return <>{renderLayoutOnPath()}</>;
}
