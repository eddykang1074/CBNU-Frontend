//SSG(Static Site Generation) 렌더링 방식은
//정적인 웹페이지 소스를 개발환경 빌드 타임에 미리 만들어서 서버에 배포하고
//배포된 서버의 소스를 그냥 웹브라우저로 해석해주는 방식 적용
//정적웹사이트(단순 웹사이트=db프로그래밍이 필요없는 ) 만들고 싶을때
//데이터 등록/변경 주기가 긴 웹사이트를 개발할때... 주로 사용함
//** 기본적으로  next.js의  모든 컴포넌트 파일은 JSX만 표시할때는 SSG방식으로 작동합니다. */

import { IArticle, ArticleTypeCode, BoardTypeCode } from "@/interfaces/article";

const SSG = ({ articles }: { articles: IArticle[] }) => {
  return (
    <div>
      CSR-Client Side Rendering 예시코드
      <table className="w-full">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>아이피</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.article_id}</td>
              <td>{article.title}</td>
              <td>{article.view_count}</td>
              <td>{article.ip_address}</td>
              <td>{article.reg_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

//getStaticProps()함수는 SSG(StaticSiteGeneration)방식으로 개발자 컴퓨터(환경)에서 빌드타임에
//restapi를 호출하여 빌드 타임의 데이터를 기준으로 정적 웹페이지를 생성해주는 함수입니다.
//SSG실행순서 : 개발환경 npm run build 를통한 빌드실행->모든 컴포넌트파일중에서 getStaticProps()사용 컴포넌트 탐색
//-->컴포넌트별 getStaticProps()실행 --실행 결과 반환데이터를 해당 컴포넌트의 props로 전달하여 정적 웹페이지 생성
//최종 서버에 배포하면 빌드타임에 생성된 정적웹페이지가 메뉴 클릭시 웹브라우저로 전달 표시됨...
//export const getStaticProps = async () => {
//백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props데이터 파라메터 형식으로 전달한다.
//const res = await fetch("http://localhost:5000/api/article/list");
//const result = await res.json();
//return {
//props: { articles: result.data },
//};
//};

//ISR방식 옵션 추가로
//지정된 시간이 지나면 서버측에서 해당 데이터를 기반으로 정적 웹페이지를 생성하여
//서버에서 주기적으로 다시 생성된 정적 웹페이지를 다운받아 화면을 갱신한다.
export const getStaticProps = async () => {
  //백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props데이터 파라메터 형식으로 전달한다.
  const res = await fetch("http://localhost:5000/api/article/list");
  const result = await res.json();
  return {
    props: { articles: result.data },
    revalidate: 30, // 페이지의 유효기간(수명)을 초단위로 지정한다
  };
};

export default SSG;
