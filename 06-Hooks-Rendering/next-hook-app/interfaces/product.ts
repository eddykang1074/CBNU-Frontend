//카테고리 선택 콤보박스내 출력될 카테고리 단일 객체 타입
export interface Category {
  category_id: number;
  category: string;
  sort: number;
}

//단일 제품 데이터 타입 정의
export interface Product {
  product_id: number;
  category_id: number;
  product_name: string;
  manufacturer: string;
  price: number;
  stock: number;
  image: string;
}
