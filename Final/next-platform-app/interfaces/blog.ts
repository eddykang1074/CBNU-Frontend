export interface ICreateBlog {
  title: string;
  contents: string;
  display: number;
}

export interface IBlog {
  article_id: number;
  board_type_code: number;
  title: string;
  article_type_code: number;
  contents: string;
  view_count: number;
  ip_address: string;
  is_display_code: number;
  reg_date: string;
  reg_member_id: number;
  edit_date: string;
  edit_member_id: number;
}
