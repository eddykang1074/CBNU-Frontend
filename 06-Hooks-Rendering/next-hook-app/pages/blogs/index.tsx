//컴포넌트 내에서의 데이터 상태관리를 위한 useState훅 참조하기
//현재 컴포넌트의 생애주기(LifeCycle) 관리를 위한 useEffect훅 참조하기
import { useState, useEffect } from "react";

const BlogList = () => {
  //검색어 키워드 상태 데이터 값 정의 및 값 초기화
  const [searchWord, setSearchWord] = useState("");

  //검색 결과 블로그 목록 상태 데이터 값 정의 초기화
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "블로그 게시글 제목1입니다.",
      view_cnt: 10,
      create_date: "2021-08-01",
    },
  ]);

  //현재 컴포넌트 최초로 화면에 렌더링되는 시점(Mount)에 실행되는 useEffect훅정의
  //useEffect('최초 마운팅될때 실행할 콜백함수',생애주기시점정의 [] 빈배열의 경우 최초 마운팅되는 시점을 말합니다.)
  useEffect(() => {
    console.log(
      "최초 블로깅 조회 화면이 나타나는 시점(마운팅시점)에 호출됩니다."
    );

    //해당 컴포넌트가 사라지는(Umount) 시점에 실행되는 콜백함수(클린업함수) 정의
    return () => {
      console.log("블로그 목록 페이지가 사라지기전에 실행됩니다.");
    };
  }, []);

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
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          검색
        </button>
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
