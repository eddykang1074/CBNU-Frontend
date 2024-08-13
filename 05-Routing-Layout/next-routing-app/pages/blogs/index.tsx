import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BlogType } from '@/interface/blog';

const BlogList = () => {
  const router = useRouter();

  //게시글 목록 데이터상태 정의 및 초기화(빈배열)
  const [blogs, setBlogs] = useState<BlogType[]>([
    {
      id: 1,
      title: '제목입니다1',
      content: '내용1',
      viewCnt: 0,
      display: true,
      createdAt: '2021-10-01',
      updatedAt: '2021-10-01',
    },
    {
      id: 2,
      title: '제목입니다.2',
      content: '내용2',
      viewCnt: 0,
      display: true,
      createdAt: '2021-10-01',
      updatedAt: '2021-10-01',
    },
    {
      id: 3,
      title: '제목입니다.3',
      content: '내용3',
      viewCnt: 0,
      display: true,
      createdAt: '2021-10-01',
      updatedAt: '2021-10-01',
    },
  ]);

  //신규 게시글 버튼 클릭시 신규 게시글 페이지로 이동시키기
  //useRouter.push()함수를 이용한 프로그래밍적으로 페이지 이동처리하기
  const moveDetail = () => {
    router.push('/blogs/new');
  };

  return (
    <div className="h-[700px] ml-4">
      <h1>블로깅 목록</h1>
      <div className="text-right">
        <button
          onClick={moveDetail}
          className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          신규 게시글
        </button>
      </div>

      <table className="w-full ml-4 mr-4 mt-4">
        <thead>
          <tr>
            <th>글번호</th>
            <th>글제목</th>
            <th>조회수</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            //<tr key={blog.id} onClick={() => router.push(`/blogs/${blog.id}`)}>
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </td>
              <td>{blog.viewCnt}</td>
              <td>{blog.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
