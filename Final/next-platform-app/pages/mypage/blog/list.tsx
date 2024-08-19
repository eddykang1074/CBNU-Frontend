import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { IBlog } from '@/interfaces/blog';
import axios from 'axios';

const BlogList = () => {
  // 아래 컴포넌트는 SSR방식으로 최초 화면 렌더링 처리시 사용
  // const BlogList = ({ blogs }: { blogs: IBlog[] }) => {
  const router = useRouter();

  //CSR-Cient Side Rendering시에만 사용 : 게시글 목록 데이터 상태 정의
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  //CSR방식으로 최초 화면 렌더링(마운트)시 웹브라우저 서버 RESTFUL API 호출 게시글 목록 조회 바인딩처리하기
  useEffect(() => {
    getBlogList();
  }, []);

  //비동기 방식으로 백엔드 게시글 목록 데이터 호출함수
  async function getBlogList() {
    try {
      const res = await axios.get('http://localhost:5000/api/article/list');
      if (res.data.code == 200) {
        setBlogs(res.data.data);
      } else {
        console.error('서버 에러발생...', res.data.msg);
      }
    } catch (err) {
      console.error('백엔드 API 호출에러발생...');
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            블로깅 목록
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            여러분들이 가지고 있는 관심주제에 대해 블로그를 직접 작섷해 보세요.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => {
              router.push('/mypage/blog/create');
            }}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            게시글 작성
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    글번호
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    게시여부
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    아이피주소
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    게시일시
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {blog.article_id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {blog.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {blog.is_display_code == 1 ? '게시중' : '게시안함'}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {blog.ip_address}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {blog.reg_date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

//SSR방식으로 최초 화면 렌더링시 서버에서 데이터를 조회하고 서버에서 HTML소스를 생성해서 가져온다.
// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:5000/api/article/list');
//   const result = await res.json();
//   return { props: { blogs: result.data } };
// };

export default BlogList;
