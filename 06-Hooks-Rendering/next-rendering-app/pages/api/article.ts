// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IArticle, ArticleTypeCode, BoardTypeCode } from "@/interfaces/article";

type ResponseDataType = {
  code: number;
  data: IArticle[];
  msg: string;
};

//기본 호출주소: http://localhost:3000/api/article/
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  const results: ResponseDataType = {
    code: 200,
    data: [
      {
        article_id: 1,
        board_type_code: 1,
        title: "제목1입니다.",
        article_type_code: 1,
        contents: "내용1입니다.",
        view_count: 0,
        ip_address: "111.111.111.111",
        is_display_code: 1,
        reg_date: "2024-08-15T15:00:00.000Z",
        reg_member_id: 1,
        edit_date: null,
        edit_member_id: null,
      },
    ],
    msg: "ok",
  };

  res.status(200).json(results);
}
