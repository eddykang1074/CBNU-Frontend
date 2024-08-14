import { useState, useEffect } from "react";
import { Category, Product } from "@/interfaces/product";

//DB에서 가져왔다고 가정하는 가상 데이터셋 전역 데이터 정의
const categoryData: Category[] = [
  {
    category_id: 0,
    category: "전체",
    sort: 0,
  },
  {
    category_id: 1,
    category: "TV",
    sort: 0,
  },
  {
    category_id: 2,
    category: "냉장고",
    sort: 0,
  },
  {
    category_id: 3,
    category: "컴퓨터",
    sort: 0,
  },
];

const productData: Product[] = [
  {
    product_id: 1,
    category_id: 1,
    product_name: "삼성TV",
    manufacturer: "삼성",
    price: 1000000,
    stock: 10,
    image: "",
  },
  {
    product_id: 2,
    category_id: 1,
    product_name: "LGTV",
    manufacturer: "LG",
    price: 2000000,
    stock: 30,
    image: "",
  },
  {
    product_id: 3,
    category_id: 2,
    product_name: "삼성냉장고",
    manufacturer: "삼성",
    price: 1300000,
    stock: 11,
    image: "",
  },
  {
    product_id: 4,
    category_id: 2,
    product_name: "LG냉장고",
    manufacturer: "LG",
    price: 3000000,
    stock: 40,
    image: "",
  },
  {
    product_id: 5,
    category_id: 3,
    product_name: "LG그램노트북",
    manufacturer: "LG",
    price: 5000000,
    stock: 50,
    image: "",
  },
  {
    product_id: 6,
    category_id: 3,
    product_name: "삼성노트북센스",
    manufacturer: "삼성",
    price: 6000000,
    stock: 110,
    image: "",
  },
  {
    product_id: 7,
    category_id: 3,
    product_name: "DELL컴퓨터",
    manufacturer: "DELL",
    price: 500000,
    stock: 5,
    image: "",
  },
];

const ProductSearch = () => {
  //카테고리 목록 데이터 생성
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    category_id: 0,
    category: "전체",
    sort: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);

  //최초 화면이 로딩되는시점(마운팅시점)을 찾아서
  //백엔드에서 분류목록 과 제품 목록 데이터를 가져옵니다.
  useEffect(() => {
    setCategories(categoryData);
    setProducts(productData);
    setSelectedCategory({
      category_id: 0,
      category: "전체",
      sort: 0,
    });
  }, []);

  //특정 상태값이 변경되는 시점을 확인해서 기능을 구현합니다.
  useEffect(() => {
    const searchResult = productData.filter(
      (p) => p.category_id === selectedCategory.category_id
    );

    if (selectedCategory.category_id === 0) {
      //전체 카테고리를 선택한 경우 전체 제품데이터 출력
      setProducts(productData);
    } else {
      //기타 카데고리 선택시 관련 제품목록만 출력
      setProducts(searchResult);
    }
  }, [selectedCategory]);

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //선택한 단일 카테고리 정보 조회하기
    const category = categories.find(
      (c) => c.category_id === Number(e.target.value)
    ) as Category;

    setSelectedCategory(category);
  };

  return (
    <div>
      {/* 제품 카테고리 선택영역 */}
      <div className="mt-4 ml-4">
        <select
          value={selectedCategory.category_id}
          onChange={changeCategory}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {categories.map((category, index) => (
            <option key={index} value={category.category_id}>
              {category.category}
            </option>
          ))}
        </select>
      </div>

      {/* 제품목록 출력영역 */}
      <div className="mt-4 ml-4 mr-4">
        <table className="w-full border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">제품번호</th>
              <th className="border border-slate-300">제품명</th>
              <th className="border border-slate-300">제조사</th>
              <th className="border border-slate-300">가격</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={index}>
                <td className="border border-slate-300">{p.product_id}</td>
                <td className="border border-slate-300">{p.product_name}</td>
                <td className="border border-slate-300">{p.manufacturer}</td>
                <td className="border border-slate-300">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSearch;
