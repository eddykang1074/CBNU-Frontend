//컴포넌트 내에서의 데이터 상태관리를 위한 useState훅 참조하기
//현재 컴포넌트의 생애주기(LifeCycle) 관리를 위한 useEffect훅 참조하기
import { useState, useEffect } from "react";

//중요: useEffect훅을 이용할때는 반드시
//프로젝트의 next.config.mjs파일내 reactStrictMode: false 로 설정해야합니다.
// reactStrictMode 설정은 개발시에만 사용되고 서비스/배포와는 무관한 설정입니다.

import Link from "next/link";

//단일 블로그 데이터 타입 정의
interface BlogItem {
  id: number;
  title: string;
  view_cnt: number;
  create_date: string;
}

//게시글 원본 데이터 목록(Database)
const orginalData: BlogItem[] = [
  {
    id: 1,
    title: "블로그 제목1입니다.",
    view_cnt: 10,
    create_date: "2021-10-01",
  },
  {
    id: 2,
    title: "블로그 제목2입니다.",
    view_cnt: 20,
    create_date: "2021-10-02",
  },
  {
    id: 3,
    title: "블로그 제목3입니다.",
    view_cnt: 30,
    create_date: "2021-10-03",
  },
  {
    id: 4,
    title: "블로그 제목4입니다.",
    view_cnt: 40,
    create_date: "2021-10-04",
  },
  {
    id: 5,
    title: "블로그 제목5입니다.",
    view_cnt: 50,
    create_date: "2021-10-05",
  },
];

const BlogList = () => {
  //검색어 키워드 상태 데이터 값 정의 및 값 초기화
  const [searchWord, setSearchWord] = useState<string>("");

  //검색 결과 블로그 목록 상태 데이터 값 정의 초기화
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  //현재 컴포넌트 최초로 화면에 렌더링되는 시점(Mount)에 실행되는 useEffect훅정의
  //useEffect('최초 마운팅될때 실행할 콜백함수',생애주기시점정의 [] 빈배열의 경우 최초 마운팅되는 시점을 말합니다.)
  //useEffect('실행할콜백함수',[]); //해당컴포넌트의 최초 마운팅 시점과 언마운팅 시점에 대해 프로그래밍(로직) 가능하다.
  useEffect(() => {
    console.log(
      "최초 블로깅 조회 화면이 나타나는 시점(마운팅시점)에 호출됩니다."
    );

    //최초 해당 컴포넌트가 마운팅(최초1회)될때 백엔드 RESTAPI를 호출해서 블로그 목록을 조회해온다
    //조회해온 블로그 목록데이터를 setBlogs()세터함수를 통해 상태데이터로 저장한다.
    setBlogs(orginalData);

    //해당 컴포넌트가 사라지는(Umount) 시점에 실행되는 콜백함수(클린업함수) 정의
    return () => {
      console.log("블로그 목록 페이지가 사라지기전에 실행됩니다.");
    };
  }, []);

  //화면내 변화가 일어날때마다 실행되는 useEffect훅 정의하기
  useEffect(() => {
    console.log(
      "화면내에서 상태데이터가 변경되어 렌더링이 일어날때마다 실행됩니다."
    );
  });

  //특정 상태 데이터의 변경을 감지하여 프로그래밍을 구현하고 싶은경우도 useEffect훅을 사용한다.
  //useEffect('실행할콜백함수',[감지할상태데이터]);
  //감지할 상태데이터 값이 변경될때마다 콜백함수가 실행된다.
  useEffect(() => {
    console.log("검색어가 변경되어 블로그목록을 갱신합니다.", searchWord);
    blogSearch();
  }, [searchWord]);

  //검색어 기반 블로그 검색처리함수 정의
  //검색 버튼 클릭시 호출되는 함수
  const blogSearch = () => {
    let searchResult: BlogItem[] = [];

    if (searchWord.length > 0) {
      searchResult = orginalData.filter((item) =>
        item.title.includes(searchWord)
      );
      setBlogs(searchResult);
    } else {
      setBlogs(orginalData);
    }
  };

  return (
    <div>
      <h1 className="m-4">블로그 조회하기</h1>

      {/* 상단 검색어 입력영역 */}
      <div className="m-4 flex">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="검색어를 입력해주세요."
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          onClick={blogSearch}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          검색
        </button>

        <Link href="/">메인 이동하기</Link>
      </div>

      {/* 블로그 검색 결과 목록 표시영역 */}
      <div className="m-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>글번호</th>
              <th>글제목</th>
              <th>조회수</th>
              <th>등록일자</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.view_cnt}</td>
                <td>{item.create_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
