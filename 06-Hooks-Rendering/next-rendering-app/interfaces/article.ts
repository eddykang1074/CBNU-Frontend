//단일 게시글 인터페이스 타입정의
export interface IArticle {
  article_id: number;
  board_type_code: BoardTypeCode;
  title: string;
  article_type_code: ArticleTypeCode;
  contents?: string | null;
  view_count: number;
  ip_address: string;
  is_display_code: number;
  reg_date: string;
  reg_member_id: number;
  edit_date?: string | null;
  edit_member_id?: number | null;
}

//게시판 유형코드 열거형 타입 정의
export enum BoardTypeCode {
  NOTICE = 1,
  GENERAL = 2,
}

//게시글 유형 코드 열거형 정의
export enum ArticleTypeCode {
  GENERAL = 0, //일반게시글
  TOP_FIXED = 1, //상단 고정 게시글
}
