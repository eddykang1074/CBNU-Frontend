import { useRouter } from 'next/router';

const BlogDetail = () => {
  const router = useRouter();

  //localhost:3000/blogs/detail?id=1&name=NextJS
  //QueryString방식의 키값을 추출하는 방법
  const id = router.query.id;
  const name = router.query.name;

  return (
    <div className="h-[500px]">
      Blog Detail Web Page:{id}={name}
    </div>
  );
};

export default BlogDetail;
