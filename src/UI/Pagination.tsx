import { StyledPagination } from './styles';

export const CustomPagination = ({
  totalNum,
  pageNum,
  setPageNum,
}: {
  totalNum: number;
  setPageNum: (page: number) => void;
  pageNum: number;
}): JSX.Element => {
  const handleOnChange = (page: number) => {
    setPageNum(page);
  };
  return <StyledPagination defaultCurrent={pageNum} pageSize={10} total={totalNum} onChange={handleOnChange} />;
};
