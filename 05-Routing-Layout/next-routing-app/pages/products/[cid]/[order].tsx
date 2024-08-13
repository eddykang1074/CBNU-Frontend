import { useRouter } from "next/router";

const ProductCategory = () => {
  const router = useRouter();

  return (
    <div className="h-[700px]">
      제품 카테고리 페이지:{router.query.cid}- 정렬방식:{router.query.order}
    </div>
  );
};

export default ProductCategory;
