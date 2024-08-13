//리액트 훅은 use 접두사로 시작하는 재사용 가능한 함수를 말합니다.

//프로그래밍적으로 라우팅 처리와 정보를 관리하는 useRouter훅 참조하기
//라우팅 주소내 정보 추출과 로직을 위한 페이지 이동처리시 주로 사용하는 훅
import { useRouter } from "next/router";

const Blog = () => {
  //라우터 훅을 생성합니다.
  const router = useRouter();

  //라우팅주소 파라메터방식(/blogs/1)이나 쿼리스트링방식(/blogs?id=1&category=100)
  //모두 router.query.키명으로 추출가능합니다.
  console.log("URL주소에서 추출한 게시글 고유번호:", router.query.id);

  return <div className="h-[700px]">단일 Blog 페이지-게시글번호:{router.query.id}</div>;
};

export default Blog;
