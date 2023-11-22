import { Pagination } from "antd";
import { useState } from "react";
import { IPagination } from "../types/types";

export const CustomPagination = ({
  totalNum,
}: {
  totalNum: number;
}): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);

  return (
    <Pagination
      style={{ backgroundColor: "white", width: "500px" }}
      pageSize={10}
      total={totalNum}
      onChange={(page) => {
        setPageNum(page);
      }}
    />
  );
};
